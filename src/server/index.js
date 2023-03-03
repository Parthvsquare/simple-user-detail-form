import { createServer } from "miragejs";

export default function () {
  createServer({
    routes() {
      this.post("/api/userFormDetails", (schema, request) => {
        let attrs = JSON.parse(request.requestBody);
        console.log(attrs);
      });
    },
  });
}
