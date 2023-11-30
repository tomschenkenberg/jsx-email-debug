import {
  Body,
  Button,
  Container,
  Column,
  Head,
  Heading,
  Hr,
  Html,
  Img,
  Link,
  Row,
  Section,
  Tailwind,
  Text,
  Preview,
} from "@jsx-email/all";
import { contentUpdateEmailDemoContent } from "../lib/content-update-email/demo-content";
import * as React from "react";

export const TemplateName = "content-update";

export type ContentUpdateEmailProps = {
  contentItems?: any;
  channel?: any;
  subscriber?: any;
  tceUser?: any | undefined;
};

export const ContentUpdateEmailTemplate = ({
  contentItems,
  channel,
  subscriber,
  tceUser,
}: ContentUpdateEmailProps) => {
  if (!contentItems || !channel || !subscriber) {
    ({ contentItems, channel, subscriber, tceUser } =
      contentUpdateEmailDemoContent());
  }

  const capatilizedFrequency =
    subscriber.frequency.charAt(0).toUpperCase() +
    subscriber.frequency.slice(1);

  return (
    <Html>
      <Head />
      <Preview>The Content Exchange Content Update</Preview>
      <Tailwind>
        <Body className="mx-auto my-auto bg-white text-[#333333] font-sans">
          <Container className="m-auto max-w-3xl px-2 py-8">
            <Section>
              <Row className="mb-8 w-full float-right">
                <Column className="w-2/3 items-start align-top">
                  <Heading className="text-3xl font-semibold leading-relaxed text-[#333333] items-start align-top mt-0">
                    {capatilizedFrequency} {channel.name} Content Update from
                    TCE
                  </Heading>
                </Column>
                <Column className="w-1/3 items-start align-top">
                  <Img
                    src="https://tce.exchange/img/branding/logo/tce-logo-128x58.png"
                    width="128"
                    height="58"
                    alt="TCE"
                    className="w-32 h-14 float-right"
                  />
                </Column>
              </Row>
            </Section>
            <Text className="mt-4 text-lg leading-relaxed text-[#333333]">
              {tceUser?.name && `Hi ${tceUser.name},`}
              <br />
              We&apos;ve selected the following new {channel.name.toLowerCase()}{" "}
              stories for you to check out:
            </Text>
            {contentItems.map((item: any) => {
              const itemLink = tceUser
                ? `https://tce.exchange/c/${item.id}`
                : `https://tce.exchange/p/${item.id}`;

              const formattedDate = new Date(item.createdAt).toLocaleDateString(
                "en-US",
                {
                  year: "numeric",
                  month: "short",
                  day: "numeric",
                }
              );

              return (
                <Section key={item.id}>
                  <Hr className="border border-solid border-[#eaeaea] my-[26px] mx-0 w-full" />
                  <Row>
                    <Column className="flex items-start w-32 h-32 relative">
                      {item.content[0].content.images &&
                      item.content[0].content.images[0] ? (
                        <Link href={itemLink}>
                          <Img
                            src={item.content[0].content.images[0].uri}
                            alt=""
                            width="260px"
                            className="absolute inset-0 w-full h-full object-cover rounded-md"
                          />
                        </Link>
                      ) : (
                        <Text className="absolute inset-0 w-full h-full object-cover rounded-md bg-gray-200" />
                      )}
                    </Column>
                    <Column className="pl-8 text-base items-start align-top text-[#333333]">
                      <Link href={itemLink}>
                        <Heading className="text-xl text-[#333333] font-bold mt-0">
                          {item.content[0].content.headline}
                        </Heading>
                      </Link>
                      {item.content[0].content.lead && (
                        <Text className="mt-2">
                          {item.content[0].content.lead}
                        </Text>
                      )}
                      <Text className="mt-2">
                        From:{" "}
                        {item.source.name === item.organisation.name
                          ? item.source.name
                          : `${item.source.name}, ${item.organisation.name}`}
                        {` • ${formattedDate}`}
                        {item.origin.wordCount &&
                          item.origin.wordCount > 0 &&
                          ` • ${item.origin.wordCount} words`}
                      </Text>
                    </Column>
                  </Row>
                  <Row>
                    <Column align="right">
                      <Button
                        href={itemLink}
                        className="rounded-md bg-[#0D9488] text-white mt-4 p-2">
                        Check out this story on TCE
                      </Button>
                    </Column>
                  </Row>
                </Section>
              );
            })}
            <Hr className="border border-solid border-[#eaeaea] my-[26px] mx-0 w-full" />
            <Section>
              <Row className="mb-8 w-full px-2">
                <Column className="w-1/3">
                  <Img
                    src="https://tce.exchange/img/branding/logo/tce-logo-128x58.png"
                    width="128"
                    height="58"
                    alt="TCE"
                  />
                </Column>
                <Column className="pl-8 flex flex-row justify-between">
                  <Text className="mt-4 text-base leading-relaxed text-gray-500">
                    Your email address, {subscriber.email}, is included on this
                    list because you are subscribed to the{" "}
                    {subscriber.frequency} {channel.name} content update list.
                    You can{" "}
                    <Link
                      className="underline text-[#0F766E]"
                      href={`https://tce.exchange/content-updates/unsubscribe?id=${subscriber.id}&list=${channel.name}`}>
                      unsubscribe from this list
                    </Link>
                    .
                  </Text>
                </Column>
              </Row>
            </Section>
            <Text className="mx-auto text-center mt-4 text-base leading-relaxed text-[#444444]">
              <Link
                href="https://tce.exchange"
                className="underline text-[#444444]">
                https://tce.exchange
              </Link>
              {" - "}
              <Link
                href="mailto:support@tce.exchange"
                className="underline text-[#444444]">
                support@tce.exchange
              </Link>
              {" - "}
              <Link
                href="https://tce.exchange/privacy"
                className="underline text-[#444444]">
                Privacy policy
              </Link>
            </Text>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

export default ContentUpdateEmailTemplate;
