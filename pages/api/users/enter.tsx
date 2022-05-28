import mail from "@sendgrid/mail";
import client from "@libs/server/client";
import withHandler, { ResponseType } from "@libs/server/withHandler";
import { NextApiRequest, NextApiResponse } from "next";
import twilio from "twilio";

mail.setApiKey(process.env.SENDGRID_APIKEY!);
const twilioClient = twilio(process.env.TWILIO_SID, process.env.TWILIO_TOKEN);

async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseType>
) {
  const { phone, email } = req.body;
  const user = phone ? { phone: +phone } : email ? { email } : null;
  if (!user) return res.status(400).json({ ok: false });
  const payload = Math.floor(100000 + Math.random() * 900000) + "";
  const token = await client.token.create({
    data: {
      payload,
      user: {
        connectOrCreate: {
          where: {
            ...user,
          },
          create: {
            name: "Anonymous",
            ...user,
          },
        },
      },
    },
  });
  if (phone) {
    // const message = await twilioClient.messages.create({
    //   messagingServiceSid: process.env.TWILIO_MSID,
    //   to: process.env.MY_PHONE!,
    //   body: `Carrot Market의 일회용 비밀번호는 ${payload} 입니다.`,
    // });
    // console.log(message);
  } else if (email) {
    // const email = await mail.send({
    //   from: "hanbat7475@naver.com",
    //   to: "hanbat7475@naver.com",
    //   subject: "Carrot Market Verification Email",
    //   text: `Carrot Market의 인증코드는 ${payload} 입니다.`,
    //   html: `<strong>Carrot Market의 인증코드는 ${payload} 입니다.</strong>`,
    // });
    // console.log(email);
  }
  return res.json({
    ok: true,
  });
}

export default withHandler("POST", handler);
