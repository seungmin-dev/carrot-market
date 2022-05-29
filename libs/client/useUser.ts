import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function useUser() {
  const [user, setUser] = useState();
  const router = useRouter();
  useEffect(() => {
    fetch("/api/users/me")
      .then((res) => res.json())
      .then((data) => {
        if (!data.ok) {
          return router.replace("/enter"); // router.push => 리다이렉트 되면서 히스토리에 home 페이지가 남게 됨
        }
        setUser(data.profile);
      });
  }, [router]);

  return user;
}
