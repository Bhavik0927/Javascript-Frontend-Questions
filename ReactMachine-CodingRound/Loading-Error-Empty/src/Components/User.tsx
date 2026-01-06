import { useState, useEffect } from "react";
import type { ProductResponse, User } from "../types/User";

const User = () => {
  const LIMIT = 6;

  const [users, setUser] = useState<User[]>([]);
  const [page, setPage] = useState<number>(1);
  const [search, setSearch] = useState<string>("");

  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    const timer = setTimeout(() => {
      const fetchUsers = async () => {
        setLoading(true);
        setError(null);

        try {
          const res = await fetch("https://dummyjson.com/products", {
            signal,
          });

          if (!res.ok) {
            throw new Error("Failed to fetch users");
          }
          console.log(res);
          const data: ProductResponse = await res.json();
          console.log(data);
          setUser(data.products);
        } catch (error) {
          if (error instanceof DOMException && error.name === "AbortError") {
            return;
          }
          setError((error as Error).message);

          console.log(error);
          setError((error as Error).message);
        } finally {
          setLoading(false);
        }
      };

      fetchUsers();

    }, 500);

    return () => {
      clearTimeout(timer);
      controller.abort();
    };
  }, [page,search]);

  if (loading)
    return (
      <div style={{ textAlign: "center" }}>
        <span>⏳ Loading...</span>
      </div>
    );

  if (error) return <h2>Error...</h2>;

  const start: number = (page - 1) * LIMIT;
  const end: number = start + LIMIT;
  const totalpages: number = Math.ceil(users.length / LIMIT);

  return (
    <>
      <div style={{ textAlign: "center", margin: "5px" }}>
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search product"
          type="text"
        />
        <button style={{ cursor: "pointer" }}>Search</button>
      </div>
      <ul>
        {users.slice(start, end).map((u) => (
          <div key={u.id}>
            <h2>
              {u.title} - <span>{u.category}</span>
            </h2>
            <p>{u.description}</p>
          </div>
        ))}
      </ul>

      <div style={{ marginTop: "12px" }}>
        <button
          style={{ cursor: "pointer" }}
          onClick={() => setPage((prev) => prev - 1)}
          disabled={page === 1 || loading}
        >
          Prev
        </button>
        <span>
          Page {page} of {totalpages}
        </span>
        <button
          style={{ cursor: "pointer" }}
          onClick={() => setPage((prev) => prev + 1)}
          disabled={page === totalpages || loading}
        >
          Next
        </button>
      </div>
    </>
  );
};

export default User;
