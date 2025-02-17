import Link from "next/link";
import { useRouter } from "next/navigation";

export const Header = ({ children }) => {
  const route = useRouter();
  const createPost = () => {
    route.push(`/createPost`);
  };
  return (
    <div>
      <div className="header">
        <Link href={"/"}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="icon icon-tabler icon-tabler-home"
            width="44"
            height="44"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="#2c3e50"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M5 12l-2 0l9 -9l9 9l-2 0" />
            <path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7" />
            <path d="M9 21v-6a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v6" />
          </svg>
        </Link>
        <button onClick={createPost}>Create post</button>
      </div>
      <div>{children}</div>
    </div>
  );
};
