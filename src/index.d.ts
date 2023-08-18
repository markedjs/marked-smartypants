import type { marked } from "marked";
import type { MarkedExtension } from "marked";

/**
 * Add closing slash to tags like: `hr`, `br`, `img`, and `input`
 *
 * @returns A {@link MarkedExtension | MarkedExtension} to be passed to {@link marked.use | `marked.use()`}
 */
export function markedSmartypants(options?: {
  config?: string | number;
}): MarkedExtension;
