import { roonHookApp } from "@forrestjs/hooks";
import reactRoot from "@forrestjs/react-root";
import reactRouter from "@forrestjs/react-router";

roonHookApp({
  settings: {
    layout: {
      title: {
        value: "ToDo App"
      }
    }
  },
  services: [reactRoot, reactRouter],
  features: []
});
