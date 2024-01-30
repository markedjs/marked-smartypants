import { marked } from "marked";
import { smartypants } from "../src/index";

marked.use(smartypants());
marked.use(smartypants({}));
marked.use(smartypants({ config: "1" }));
marked.use(smartypants({ config: 1 }));

marked.parse("He said, -- \"A 'simple' sentence. . .\" --- unknown");
