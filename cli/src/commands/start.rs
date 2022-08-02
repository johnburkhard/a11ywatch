use crate::fs::TempFs;
use crate::launchers::docker;
use crate::INCLUDE_FRONTEND;
use std::env;
use std::path::Path;
use std::process::Command;

#[derive(Debug, Default)]
pub struct Start {}

impl Start {
    /// start the a11ywatch application through docker or locally.
    pub fn process(local: &bool, standalone: &bool) -> bool {
        let mut file_manager = TempFs::new();

        let frontend: bool = match env::var(INCLUDE_FRONTEND) {
            Ok(val) => val == "true",
            Err(_) => false,
        };

        if *local {
            let npm_path = Command::new("npm")
                .args(["root", "-g"])
                .output()
                .expect("Failed to execute npm root -g command!");
            let stdout = String::from_utf8_lossy(&npm_path.stdout);
            let stdout = stdout.clone().to_owned().to_string();
            let stdout = &stdout.trim().replace("\n", "");
            let node_dir = Path::new(&stdout);
            let node_dir = node_dir.join("@a11ywatch/a11ywatch");
            let node_dir = node_dir.display();

            Command::new("npm")
                .args(["run", "start", "--prefix", &node_dir.to_string()])
                .status()
                .expect("Failed to execute @a11ywatch/a11ywatch command!");
        } else {
            if frontend {
                file_manager.create_compose_frontend_file().unwrap();
            }
            file_manager
                .create_compose_backend_file(standalone)
                .unwrap();
            docker::start_service(&frontend, &file_manager);
        }

        *local
    }
}
