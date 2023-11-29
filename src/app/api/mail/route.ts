import { render } from "@jsx-email/render";
import { SES } from "@aws-sdk/client-ses";
import { ContentUpdateEmailTemplate } from "../../../emails/content-update";
import { NextResponse } from "next/server";

const ses = new SES({ region: process.env.AWS_SES_REGION });

async function SendEmail() {
  const html = await render(ContentUpdateEmailTemplate({}));

  const output = await ses.sendEmail({
    Source: "website@tce.exchange",
    Destination: {
      ToAddresses: ["tom@tce.exchange"],
    },
    Message: {
      Body: {
        Html: {
          Charset: "UTF-8",
          Data: html,
        },
      },
      Subject: {
        Charset: "UTF-8",
        Data: "JSX email to the rescue",
      },
    },
  });
  return output;
}

export async function GET(request: Request) {
  try {
    return NextResponse.json(await SendEmail());
  } catch (e) {
    return NextResponse.json(e);
  }
}
