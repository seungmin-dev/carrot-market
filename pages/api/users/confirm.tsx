import { withIronSessionApiRoute } from "iron-session/next";
import { NextApiRequest, NextApiResponse } from "next";
import withHandler, { ResponseType } from "@libs/server/withHandler";
import client from "@libs/server/client";

declare module "iron-session" {
  interface IronSessionData {
    user?: {
      id: number;
    };
  }
}

async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseType>
) {
  console.log(req.session);
  // 아래에서 핸들러를 withIronSessionApiRoute(도우미 함수)로 감싸줬기 때문에 req.session 확인 가능
  const { token } = req.body;
  const exists = await client.token.findUnique({
    where: {
      payload: token,
    },
    include: { user: true },
  });
  if (!exists) return res.status(400).end();
  req.session.user = {
    id: exists.userId,
  };
  await req.session.save(); // 세션 데이터를 암호화하고 쿠키를 설정
  console.log(exists);
  res.status(200).end();
}

export default withIronSessionApiRoute(withHandler("POST", handler), {
  cookieName: "carrotsession",
  password: process.env.SESSION_PW!,
});
