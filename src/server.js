import { createServer } from "miragejs";

export function makeServer({ environment = "development" } = {}) {
  createServer({
    routes() {
      this.namespace = "api";

      this.post("/userFormDetails", (schema, request) => {
        let attrs = JSON.parse(request.requestBody);
        console.log(attrs);
      });
    },
  });
}
