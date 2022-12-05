import { Equal, Expect } from "./helpers/type-utils";

/**
 * Here, the id property is shared between all three
 * interfaces. Can you find a way to refactor this to
 * make it more DRY?
 */
 interface id {
  id: string;
}

interface User extends id {
  id: string;
  firstName: string;
  lastName: string;
}

interface Post extends id {
  id: string;
  title: string;
  body: string;
}

interface Comment extends id {
  id: string;
  comment: string;
}

type tests = [
  Expect<Equal<User, { id: string; firstName: string; lastName: string }>>,
  Expect<Equal<Post, { id: string; title: string; body: string }>>,
  Expect<Equal<Comment, { id: string; comment: string }>>,
];
