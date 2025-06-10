import { FastifyInstance } from "fastify";
import { authenticate } from "@/http/controllers/users/authenticate";
import { register } from "./controllers/users/register";
import { profile } from "./controllers/users/profile";
import { verifyJwt } from "./middlewares/verify-jwt";

export async function appRoutes(app: FastifyInstance) {
  app.post("/users", register);

  app.post("/sessions", authenticate);

  app.get("/me", { onRequest: [verifyJwt] }, profile);
}
