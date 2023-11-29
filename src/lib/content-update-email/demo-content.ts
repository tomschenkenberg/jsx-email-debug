import { type ContentUpdateEmailProps } from "@/emails/content-update";

export function contentUpdateEmailDemoContent(): ContentUpdateEmailProps {
  return {
    tceUser: {
      id: "1",
      email: "mike@tyson.fake",
      name: "Mike Tyson",
      phone: "555-555-5555",
      lastLoggedInAt: "2021-05-17T10:05:33.628Z",
    },
    channel: {
      type: "manual",
      name: "Tech",
      id: "0de28e62-1626-43fb-ad95-a28312a8329d",
      description: "Tech content",
      createdAt: "2023-05-17T10:05:33.628Z",
      contentItemCriteria: {
        content_items: [
          "07686423-299e-46c1-98c1-e8caeaebbae8",
          "41e4bfed-aaac-4dbe-80de-01b50ab73ede",
          "71f38bae-2b0f-478f-8a8f-ab510c333a63",
          "e4ca3310-87b1-4bb2-aa09-8ab1fd2ef6e9",
          "2c681389-9e1d-4dfc-aaf8-47ee6855615a",
          "86e1db3a-6f87-4e72-837c-61cbfc9c2548",
          "43421d01-82dc-4a65-9ba9-ed772dda8835",
          "fdaffe1e-f711-4332-a8e3-a42450918622",
          "e8240897-5307-4d33-9a86-a44d554463ab",
          "c6e404dc-eabe-4507-85f7-5de18a664637",
        ],
      },
      labels: ["public"],
    },
    subscriber: {
      id: "dd142565-740a-4d54-a853-2ce9b49f791d",
      email: "tom@tce.exchange",
      entityType: "channel",
      entityId: "0de28e62-1626-43fb-ad95-a28312a8329d",
      whoMutated: "tom",
      subscribedAt: new Date("2023-06-30T09:00:11.237Z"),
      unsubscribedAt: null,
      createdAt: new Date("2023-05-17T10:19:34.005Z"),
      updatedAt: new Date("2023-06-30T09:00:11.238Z"),
      frequency: "weekly",
    },
    contentItems: [
      {
        id: "c6e404dc-eabe-4507-85f7-5de18a664637",
        addedAt: "2023-07-09T09:29:13.159Z",
        isOffline: false,
        content: [
          {
            language: "en",
            content: {
              headline:
                "Governance is a key factor in the success of Innovation Districts",
              subline: "",
              lead: "",
              text: [
                '<p>Innovation districts, the vibrant epicenters of creativity, research, and development, are increasingly becoming the heart of urban economic growth. However, the success of these districts hinges on three core activities: setting a collective vision for growth, establishing a governance structure, and designing a sustainable financing model. These three interconnected elements strengthen a district&#8217;s unique value proposition.</p>\n\n<div><ul><li>Innovation Districts can be powerful instruments for a city&#8217;s economic and innovative development.</li><li>Not all Innovation Districts are a success.</li><li>Much of the success is dependent on governance, a paper shows.</li></ul></div>\n\n<p><em>Why Governance Matters: An analysis on how innovation districts “Organize for Success”</em>, is <a href="https://www.giid.org/why-innovation-districts-need-effective-governance/#subscribe-for-download-file">written by</a> Julie Wagner, Founder of <a href="https://www.giid.org/">The Global Institute</a>. She concludes: “The ability for innovation districts to organize effectively can decide why one district fails while another succeeds and powerfully evolves. Unless district leaders design effective models to lead and govern, they are destined to become stuck in organizational, if not political, gridlock. This paper is a wake-up call for early and emerging districts worldwide.”</p>\n\n<h2>Attracting champions</h2>\n\n<p>A collective vision serves as the North Star of an innovation district, signaling the direction of growth and attracting champions dedicated to supporting and advancing the district. The governance structure, either formal or informal, is the framework within which core decisions are made and cross-district activities are managed. Lastly, financing, a priority for all districts, can be carried out through traditional or innovative mechanisms. Increasingly, districts are seeking to generate their own revenue streams to finance important cross-cutting activities.</p>\n\n<p>The Global Institute on Innovation Districts conducted an in-depth analysis of place-based governance models across innovation districts worldwide. The study examined the types of legal structures, specific functions, duties, powers of governance structures, their ability to generate revenue, and the decision-making processes. The research distilled seven factors contributing to effective governance: co-design and co-invest for effective governance, identify the right degree of independence, allow a diversity of voice and view, strategically involve government based on local conditions, tie governance to land, design a financially sustainable model, and ensure flexibility—a governance model that can adapt over time.</p>\n\n<h2>Shared vision</h2>\n\n<p>Governance in innovation districts is not about controlling or taking over a district. Instead, it&#8217;s about stakeholders developing a shared and highly ambitious vision and detailed ambitions, which will require a more integrated approach. Governance becomes powerful when stakeholders view it as a mission to advance an R&D ecosystem, drive new forms of equitable and sustainable growth, and physically transform the land in the process.</p>\n\n<div><div><div>Global innovation districts partner up in a new alliance</div><div>The International Association of Science Parks and Areas of Innovation (IASP) announced a new partnership between innovation clusters worldwide.</div></div></div>\n\n<p>The role of land in advancing the mission of innovation districts is crucial. District leadership viewed land as an opportunity to transform the physical environment, creating new spaces and places within the district and as a financing mechanism. District leaders developed buildings, public facilities, and other structures through the finance lens as revenue-generating vehicles.</p>\n\n<h2>Two models</h2>\n\n<p>Regarding who sits at the governance table, international districts have developed two types of models: the dominant player model and the multi-stakeholder model. In the dominant player model, one player, such as a government or a single anchor institution, dominates the governance, driving and financing many core activities. In the multi-stakeholder governance model, multiple stakeholders serve on the board or sit on an empowered advisory committee, giving authority to decide how and where to advance the district.</p>\n\n<p>In conclusion, the governance of innovation districts is a complex but crucial aspect of their success. It requires coordinated action, a shared vision, and a strategic land use and financing approach. As innovation districts continue to evolve, so will the governance models that guide them, ensuring they remain dynamic, inclusive, and sustainable engines of economic growth.</p>\n\n<p><a href="https://innovationorigins.com/en/governance-is-a-key-factor-in-the-success-of-innovation-districts/" rel="nofollow">Source</a></p>',
              ],
              images: [
                {
                  uri: "https://d3bze35mkjv6a3.cloudfront.net/news-content/56c0202d-31ad-4d32-a266-d809ffd88174/8bb3967c605698ab5d8ecedc64b76d058d0bdc09.jpg",
                  copyright: "",
                  copyrightUsage: "unknown",
                },
                {
                  uri: "https://d3bze35mkjv6a3.cloudfront.net/news-content/56c0202d-31ad-4d32-a266-d809ffd88174/71587ca04d4808d8c24a07c50e51a68ec85d295a.jpg",
                  copyright: "",
                  copyrightUsage: "unknown",
                },
              ],
              videos: [],
              audio: [],
            },
          },
        ],
        origin: {
          language: "en",
          id: "https://innovationorigins.com/?p=451998",
          uri: "https://innovationorigins.com/en/governance-is-a-key-factor-in-the-success-of-innovation-districts/",
          wordCount: 615,
        },
        createdAt: "2023-07-09T09:27:00.000Z",
        updatedAt: "2023-07-09T09:27:00.000Z",
        topics: ["#sustainability", "#economy", "#technology"],
        keywords: [
          "sustainability",
          "governance",
          "innovatie",
          "innovation",
          "innovationdistrict",
        ],
        type: "article",
        publicationStatus: "usable",
        source: {
          id: "7fa836fa-c030-4db2-aceb-443b144785bb",
          name: "Innovation Origins",
        },
        organisation: {
          id: "e9532fa6-12eb-46d1-80f6-237825e0c7bc",
          name: "Innovation Origins",
        },
      },
      {
        id: "034bfe44-7003-46d8-b9f4-b68455cb6228",
        addedAt: "2023-07-09T04:02:53.191Z",
        isOffline: false,
        content: [
          {
            language: "en",
            translation: {
              status: "complete",
              provider: "DeepL",
            },
            content: {
              headline:
                "Headset Apple Vision Pro will be scarce in 2024 due to production issues",
              subline: null,
              lead: null,
              text: [
                '<p><strong>Apple estimates it will make only about 400,000 copies of the long-awaited but very expensive headset Vision Pro by 2024. That\'s a lot less than the 1 million units it initially targeted. The reason for that scaling back is the major problems the company is experiencing in manufacturing the Apple Vision Pro. Especially the high-end screens are causing difficulties.</strong></p>\n\n<p><strong>In the news:</strong> It\'s the <em><a href="https://www.ft.com/content/b6f06bde-17b0-4886-b465-b561212c96a9" target="_blank" rel="noreferrer noopener">Financial Times</a></em> which came out with a report on Apple\'s problems in producing the Vision Pro. They are basing this on information from Luxshare, the Chinese company that was initially the only one hired to assemble the headset.</p>\n\n<p><strong>What preceded it.</strong> A month ago, Apple finally introduced its long-awaited augmented reality headset. The <a href="https://newsmonkey.be/apple-vision-pro-augmented-reality-headset-2/">Apple Vision Pro</a> was an estimated seven years in the making, making it very high-end. This is also reflected in its target price of $3,499 in the United States.</p>\n\n<p><strong>The details:</strong></p>\n\n<ul>\n<li>That Apple made no compromises in terms of hardware when developing the Vision Pro now has adverse consequences. Indeed, each headset consists of two micro-OLED displays on the inside and one curved lenticular lens on the outside edge. Those micro-OLED displays in particular are revolutionary because there is nothing similar on the market. Therefore, finding a manufacturer for these that can meet all of Apple\'s requirements is proving to be a major problem.</li>\n\n<li>Because of these difficulties, Apple will only be able to produce 400,000 Vision Pro headsets by 2024, according to Luxshare. That\'s a lot less than the 1 million units it first set as its goal, according to insiders. </li>\n\n<li>Those production problems will also presumably mean that the Apple Vision Pro will be hard to come by for a long time. Indeed, despite the high price, experts expect that the device will still sell well. Indeed, die-hard Apple fans and high-end users do seem won over by the Vision Pro.</li>\n\n<li>Another consequence is that Apple may put off plans for a <a href="https://newsmonkey.be/gerucht-apple-goedkopere-augmented-reality-headset/">cheaper headset</a>. It was recently reported that the company was already developing successors to the Vision Pro, but now that will be for the distant future.</li>\n</ul>\n\n<p>(nd)</p>',
              ],
              images: [
                {
                  uri: "https://d3bze35mkjv6a3.cloudfront.net/news-content/034bfe44-7003-46d8-b9f4-b68455cb6228/d6793198cee07650ae42f340934049411f255047.jpg",
                  copyright: "",
                  copyrightUsage: "unknown",
                },
              ],
            },
          },
          {
            language: "nl",
            content: {
              headline:
                "Headset Apple Vision Pro zal schaars zijn in 2024 door productieproblemen",
              subline: "",
              lead: "",
              text: [
                "<p><strong>Apple zal in 2024 naar schatting maar zo&#8217;n 400.000 exemplaren maken van de langverwachte, maar zeer dure headset Vision Pro. Dat is...</li>\n</ul>\n\n<p>(nd)</p>",
              ],
              images: [
                {
                  uri: "https://d3bze35mkjv6a3.cloudfront.net/news-content/034bfe44-7003-46d8-b9f4-b68455cb6228/d6793198cee07650ae42f340934049411f255047.jpg",
                  copyright: "",
                  copyrightUsage: "unknown",
                },
              ],
              videos: [],
              audio: [],
            },
          },
        ],
        origin: {
          language: "nl",
          id: "162139",
          uri: "https://businessam.be/headset-apple-vision-pro-schaars-2024-productieproblemen-2/",
          wordCount: 347,
        },
        createdAt: "2023-07-09T03:56:00.000Z",
        updatedAt: "2023-07-09T03:56:00.000Z",
        topics: ["#economy", "#business"],
        keywords: ["tech"],
        type: "article",
        publicationStatus: "usable",
        source: {
          id: "afd83717-4fd5-4d1b-8cb5-5ba620707b81",
          name: "Business AM",
        },
        organisation: {
          id: "fe793d85-d9e2-4497-a4e1-f89ec0d2c411",
          name: "Business AM",
        },
      },
      {
        id: "b677f49f-9e11-4b2a-89c5-7dc85348bc54",
        addedAt: "2023-07-07T15:10:44.094Z",
        isOffline: false,
        content: [
          {
            language: "en",
            content: {
              headline:
                "Alibaba Rolls Out AI Image Generator, Raising Competition for AI Products",
              subline: "",
              lead: "",
              text: [
                '<br/><br/><hr><br/><br/>Key Takeaways<ul><li>Alibaba unveiled a new AI tool called Tongyi Wanxiang on Friday, which can generate images from text prompts.</li><li>The Chinese tech giant also launched ModelScopeGPT, an AI. Since its launch, the model has received over 300,000 enterprise beta testing requests.<span data-cite="3"></span></p>',
              ],
              images: [],
              videos: [],
              audio: [],
            },
          },
        ],
        origin: {
          language: "en",
          id: "7557869",
          uri: "https://www.investopedia.com/alibaba-releases-text-to-image-ai-tool-7557869",
          wordCount: 293,
        },
        createdAt: "2023-07-07T15:01:04.000Z",
        updatedAt: "2023-07-07T15:01:04.519Z",
        topics: ["#economy", "#business"],
        keywords: ["techsectornews", "companynews", "news"],
        type: "article",
        publicationStatus: "usable",
        source: {
          id: "bb50c25b-ba56-42c4-9809-3cf212dce93c",
          name: "Investopedia",
        },
        organisation: {
          id: "04e9f482-f98f-4b99-b54a-233c4f3cb8c6",
          name: "Dotdash Meredith",
        },
      },
      {
        id: "84552e79-041e-4ae9-bad5-5d43cf0d7e84",
        addedAt: "2023-07-06T12:02:34.957Z",
        isOffline: false,
        content: [
          {
            language: "en",
            content: {
              headline:
                "Voices: I tried Mark Zuckerberg’s Twitter rival, Threads – I’m not impressed",
              subline: "",
              lead: "",
              text: [
                '<p>I had no idea how many hot singles were in my area until <a href="https://www.independent.co.uk/topic/elon-musk">Elon Musk</a> took over <a href="https://www.independent.co.uk/topic/twitter">Twitter</a>. There are so many of them! I get about three direct messages from them per day,  News & Media Ltd </p>',
              ],
              images: [
                {
                  uri: "https://d3bze35mkjv6a3.cloudfront.net/news-content/75db95bc-23c4-4c23-b9dd-9d6e5a3a59a9/912fc8c6c3a6e677f2f67849847989b917f92a32.webp",
                  copyright: "",
                  copyrightUsage: "unknown",
                },
              ],
              videos: [],
              audio: [],
            },
          },
        ],
        origin: {
          language: "en",
          id: "af5353d6d971618538d2cbcc5ca85fe9",
          uri: "https://www.independent.co.uk/voices/threads-twitter-mark-zuckerberg-elon-musk-b2370503.html",
          wordCount: 1096,
        },
        createdAt: "2023-07-07T08:54:05.000Z",
        updatedAt: "2023-07-07T08:54:05.000Z",
        topics: ["#Twitter", "#Elon Musk", "#Threads", "#Voices"],
        keywords: ["twitter", "elonmusk", "threads", "voices"],
        type: "article",
        publicationStatus: "usable",
        source: {
          id: "60bbbbaa-968d-414a-b8cc-e54a6dac1e12",
          name: "Independent Voices/Opinion",
        },
        organisation: {
          id: "fe76302a-430d-11ed-887e-ab10c46dac60",
          name: "The Independent",
        },
      },
      {
        id: "612ed3ad-a6b4-4198-b742-6572f94d9e6d",
        addedAt: "2023-07-06T17:03:30.758Z",
        isOffline: false,
        content: [
          {
            language: "en",
            content: {
              headline:
                "LockBit ransomware attackers target Japan’s biggest port: but who’s next?",
              subline: "",
              lead: "Russian ransomware group LockBit 3.0 brought Nagoya Port to a halt on Tuesday, raising concerns over what happens next\nThe post LockBit ransomware attackers target Japan’s biggest port: but who’s next? appeared first on TechFinitive.",
              text: [
                '<p>A Russian <a href="https://www.finitive.com/explainers/what-is-ransomware/">ransomware</a> group brought Japan&#8217;s biggest port to a crushing halt on .</p>',
              ],
              images: [
                {
                  uri: "https://d3bze35mkjv6a3.cloudfront.net/news-content/612ed3ad-a6b4-4198-b742-6572f94d9e6d/98a55eb176b844464474d5c903b61bcf6c9717b7.webp",
                  copyright: "",
                  copyrightUsage: "unknown",
                },
              ],
              videos: [],
              audio: [],
            },
          },
        ],
        origin: {
          language: "en",
          id: "b9e4b89b2ab5de3d9530b56c90a15648",
          uri: "https://www.finitive.com/lockbit-ransomware-attackers-target-japans-biggest-port/",
          wordCount: 570,
        },
        createdAt: "2023-07-06T16:43:09.000Z",
        updatedAt: "2023-07-06T16:43:09.000Z",
        topics: ["#news", "#technology"],
        keywords: [
          "cybersecurity",
          "protect",
          "featured",
          "home",
          "homefeatured",
          "hometopslot",
          "industry",
          "lockbit",
          "ransomware",
        ],
        type: "article",
        publicationStatus: "usable",
        source: {
          id: "6f3ec4ef-e055-402d-b089-a2a233c566e8",
          name: "Finitive",
        },
        organisation: {
          id: "bfd9166e-aedf-11ed-9c3a-bff5385c2513",
          name: "Finitive",
        },
      },
    ],
  };
}
