import "./App.scss";
import CreativeList from "./containers/CreativeList/CreativeList";
import CastList from "./containers/CastList/CastList";
import Title from "./components/Title/Title";
import { useState, useEffect } from "react";

function App() {
  const [performanceDetails, setPerformanceDetails] = useState([
    {
      data: {
        id: "2606",
        type: "event-detail",
        attributes: {
          seasonId: 40,
          slug: "turandot-by-andrei-serban",
          title: "Turandot",
          runningTimeSummary:
            "The performance lasts about 2 hours 55 minutes, including two intervals.",
          videoCtaText: null,
          videoLink: null,
          segments: [
            {
              name: "Act I",
              duration: 40,
            },
            {
              name: "Interval",
              duration: 25,
            },
            {
              name: "Act II",
              duration: 45,
            },
            {
              name: "Interval",
              duration: 20,
            },
            {
              name: "Act III",
              duration: 45,
            },
          ],
          guidance: null,
          guidanceDetails: "",
          coProducers: [],
          sponsors: [
            {
              title: "",
              intro: "<p>Production supported by</p>",
              logo: {
                desktopPath:
                  "https://static.roh.org.uk/support/veuve+clicquot+logo.png",
                mobilePath:
                  "https://static.roh.org.uk/support/veuve+clicquot+logo.png",
                thumbPath: null,
                altText: null,
                caption: null,
              },
              logoLink: null,
              description: "",
            },
            {
              title: "",
              intro:
                "<p>Position of Music Director Maestro Antonio Pappano generously supported by</p>",
              logo: {
                desktopPath: null,
                mobilePath: null,
                thumbPath: null,
                altText: null,
                caption: null,
              },
              logoLink: null,
              description: "<p>Mrs Susan A. Olde OBE</p>",
            },
            {
              title: "",
              intro: "<p>Generous philanthropic support from</p>",
              logo: {
                desktopPath: null,
                mobilePath: null,
                thumbPath: null,
                altText: null,
                caption: null,
              },
              logoLink: null,
              description:
                "<p>Julia and Hans Rausing, Huo Family Foundation, Melinda and Donald Quintin, Mr and Mrs Christopher W.T. Johnston and the Royal Opera House Endowment Fund </p>",
            },
          ],
          hashtag: "#RoyalOperaHouse",
          description:
            "<p>In the court of Princess Turandot, suitors who fail to solve her riddles are brutally killed. But when a mysterious Prince answers correctly, suddenly he holds all the power – and a glorious secret. When life hangs in the balance, can love conquer all? </p><p>Puccini’s score is rich in musical marvels (featuring ‘Nessun dorma’), while Andrei Serban’s production draws on Chinese and Italian theatrical traditions to conjure a vision of ancient China steeped in legend and fantasy. Antonio Pappano and Paul Wynne Griffiths conduct, with Catherine Foster and Anna Pirozzi in the title role and Yonghoon Lee and Russell Thomas sharing the role of Calaf.</p>",
          shortDescription:
            "<p>Puccini’s final opera is a glorious pageant of rich colour, dance and drama in Andrei Serban’s classic staging.</p>",
          reviews: [],
          accessibility: {
            title: "Accessibility",
            description:
              '<p>There is lift access and step-free routes to over 100 seats in the Stalls Circle, Balcony and Amphitheatre. There are 10 steps or fewer to some seats in the Stalls Circle, Balcony, Amphitheatre and the Donald Gordon Grand Tier. All seats in the Orchestra stalls are accessed by 9 steps or more. There is an Assisted Hearing Facility, and we produce Audio Introductions for most Main Stage Events. </p><p><strong>Book wheelchair spaces and accessible seating</strong></p><p>Join our free Access Scheme to book accessible seating or wheelchair space options in our auditoria and event spaces. Email <a target="_blank" rel="noopener" href="mailto:boxoffice@roh.org.uk">boxoffice@roh.org.uk</a> or telephone +44 (0)20 7304 4000 for pricing and availability information, to book tickets or to register. <a  href="https://www.roh.org.uk/visit/accessibility">Find out more about Accessibility at the Royal Opera House</a></p>',
          },
          sectionImages: {
            headerTicketsAndEvents: {
              desktopPath:
                "https://images.prismic.io/royal-opera-house/10413361-91fa-4cfe-96db-b2cf77691e24_Turandot-2013-ROH-Tristram-Kenton.jpg?auto=compress,format&rect=89,0,3545,2664&w=1280&h=962",
              mobilePath:
                "https://images.prismic.io/royal-opera-house/10413361-91fa-4cfe-96db-b2cf77691e24_Turandot-2013-ROH-Tristram-Kenton.jpg?auto=compress,format&rect=0,121,3720,2422&w=768&h=500",
              thumbPath: null,
              altText: null,
              caption: null,
            },
            headerDatesAndPrices: {
              desktopPath:
                "https://static.roh.org.uk/productions/turandot-by-andrei-serban/images/dates-and-prices.jpg",
              mobilePath:
                "https://static.roh.org.uk/productions/turandot-by-andrei-serban/images/dates-and-prices-mobile.jpg",
              thumbPath: null,
              altText: null,
              caption: null,
            },
            reviews: {
              desktopPath:
                "https://static.roh.org.uk/productions/turandot-by-andrei-serban/images/reviews.jpg",
              mobilePath:
                "https://static.roh.org.uk/productions/turandot-by-andrei-serban/images/reviews-mobile.jpg",
              thumbPath: null,
              altText: "Turandot © ROH/Tristram Kenton, 2014",
              caption: null,
            },
            accessibility: null,
          },
          imageTray: {
            desktopPath:
              "https://images.prismic.io/royal-opera-house/10413361-91fa-4cfe-96db-b2cf77691e24_Turandot-2013-ROH-Tristram-Kenton.jpg?auto=compress,format&rect=89,0,3545,2664&w=1280&h=962",
            mobilePath:
              "https://images.prismic.io/royal-opera-house/10413361-91fa-4cfe-96db-b2cf77691e24_Turandot-2013-ROH-Tristram-Kenton.jpg?auto=compress,format&rect=83,0,3552,2664&w=640&h=480",
            thumbPath: null,
            altText: null,
            caption: null,
          },
          imageResult: {
            desktopPath:
              "https://images.prismic.io/royal-opera-house/10413361-91fa-4cfe-96db-b2cf77691e24_Turandot-2013-ROH-Tristram-Kenton.jpg?auto=compress,format&rect=89,0,3545,2664&w=1280&h=962",
            mobilePath:
              "https://images.prismic.io/royal-opera-house/10413361-91fa-4cfe-96db-b2cf77691e24_Turandot-2013-ROH-Tristram-Kenton.jpg?auto=compress,format&rect=89,0,3552,2664&w=320&h=240",
            thumbPath:
              "https://images.prismic.io/royal-opera-house/10413361-91fa-4cfe-96db-b2cf77691e24_Turandot-2013-ROH-Tristram-Kenton.jpg?auto=compress,format&rect=89,0,3552,2664&w=320&h=240",
            altText: null,
            caption: null,
          },
          seatMapLinkVisibility: true,
          seatMapLink: "https://www.roh.org.uk/seatmap?performanceId=51382",
          calendarImage: {
            desktopPath:
              "https://images.prismic.io/royal-opera-house/10413361-91fa-4cfe-96db-b2cf77691e24_Turandot-2013-ROH-Tristram-Kenton.jpg?auto=compress,format&rect=524,0,2664,2664&w=320&h=320",
            mobilePath:
              "https://images.prismic.io/royal-opera-house/10413361-91fa-4cfe-96db-b2cf77691e24_Turandot-2013-ROH-Tristram-Kenton.jpg?auto=compress,format&rect=524,0,2664,2664&w=320&h=320",
            thumbPath:
              "https://images.prismic.io/royal-opera-house/10413361-91fa-4cfe-96db-b2cf77691e24_Turandot-2013-ROH-Tristram-Kenton.jpg?auto=compress,format&rect=524,0,2664,2664&w=320&h=320",
            altText: null,
            caption: null,
          },
          cinemaTitle: null,
          cinemaGuidanceText: "12A",
          cinemaGuidanceLogo: null,
          cinemaHeaderImage: null,
          cinemaResultImage: null,
          cinemaCastSheets: [],
          cinemaTrailer: null,
          cinemaScreeningTime:
            "3 hours and 20 minutes (including two intervals)",
          isCancelled: false,
          ctaBehaviour: null,
          helpInformation: null,
          eventCardPrimaryCtaBehaviour: null,
          startTime: null,
          endTime: null,
          cinemaBroadcastExpirationDate: null,
          isHiddenFromTicketsAndEvents: false,
          donationInformation: {
            title: "Donate",
            titleColor: "#ffffff",
            standfirst:
              "<p>Help secure the future of ballet and opera.</p><p>Experience, enjoy, donate</p>",
            ctaBehaviour: {
              ctaCopy: "Donate now",
              ctaLink: "https://www.roh.org.uk/donate-now",
            },
            image: {
              desktopPath:
                "https://s3-eu-west-1.amazonaws.com/static.roh.org.uk/redesign/donate-hompage-pappano-desktop.jpg",
              mobilePath:
                "https://s3-eu-west-1.amazonaws.com/static.roh.org.uk/redesign/donate-hompage-pappano-mobile.jpg",
              thumbPath: null,
              altText:
                "Antonio Pappano in rehearsal for Live from Covent Garden, 13 June 2020 ©2020 ROH. Photograph by Lara Cappelli",
              caption: null,
            },
          },
          ticketPriceDetails: null,
          infoComponent: null,
          castListInfo: {
            isActivated: false,
            eventSummary: null,
            companyCompositions: [],
            eventSupportDetails: "",
            campaigns: [],
            welcomeMessageTitle: null,
            welcomeMessageText: "",
            isTruncatedManually: false,
            rolesToDisplay: [null],
          },
          sourceType: "event-detail",
          showingDates: [],
        },
        relationships: {
          productions: {
            data: [
              {
                id: "2606",
                type: "productions",
              },
            ],
          },
          runs: {
            data: [
              {
                id: "51318",
                type: "runs",
              },
            ],
          },
          tags: {
            data: [
              {
                id: "830",
                type: "tags",
              },
              {
                id: "921",
                type: "tags",
              },
              {
                id: "1132",
                type: "tags",
              },
              {
                id: "585",
                type: "tags",
              },
              {
                id: "993",
                type: "tags",
              },
            ],
          },
          festival: {
            data: null,
          },
          locations: {
            data: [],
          },
        },
      },
      included: [
        {
          id: "2606",
          type: "productions",
          attributes: {
            title: "<h4>Turandot</h4>",
            language: "Sung in Italian with English surtitles",
            synopsis: "<p></p>",
            galleryImages: [],
            synopsisImage: {
              desktopPath:
                "https://static.roh.org.uk/productions/turandot-by-andrei-serban/images/synopsis.jpg",
              mobilePath:
                "https://static.roh.org.uk/productions/turandot-by-andrei-serban/images/synopsis-mobile.jpg",
              thumbPath: null,
              altText:
                "Ailyn Pérez as Liù in Turandot © ROH/Tristram Kenton, 2014",
              caption: null,
            },
            castListCreditsTitle: "CREDITS",
            castListCastTitle: "CAST",
            castListSynopsisTitle: "SYNOPSIS",
            castListSynopsisText: "<p></p>",
            castListProductionCreditsTitle: "PRODUCTION CREDITS",
            castListProductionExtraDetails: "",
            castListCastDetails: "",
            ghostPerformances: [],
          },
          relationships: {
            cast: {
              data: [],
            },
            creatives: {
              data: [
                {
                  id: "7882ee475b",
                  type: "creatives",
                },
                {
                  id: "2c7e94e8c1",
                  type: "creatives",
                },
                {
                  id: "612f0db911",
                  type: "creatives",
                },
                {
                  id: "6f6e2ed447",
                  type: "creatives",
                },
                {
                  id: "0f0b758426",
                  type: "creatives",
                },
                {
                  id: "c5be0b4a2e",
                  type: "creatives",
                },
                {
                  id: "fb8fe1c15b",
                  type: "creatives",
                },
              ],
            },
            tags: {
              data: [
                {
                  id: "830",
                  type: "tags",
                },
                {
                  id: "921",
                  type: "tags",
                },
                {
                  id: "1132",
                  type: "tags",
                },
                {
                  id: "585",
                  type: "tags",
                },
                {
                  id: "993",
                  type: "tags",
                },
              ],
            },
          },
        },
        {
          id: "7882ee475b",
          type: "creatives",
          attributes: {
            id: "7882ee475b",
            role: "Music",
            name: "Giacomo Puccini",
            slug: "giacomo-puccini",
            isHiddenOnEventDetails: false,
          },
          relationships: {},
        },
        {
          id: "2c7e94e8c1",
          type: "creatives",
          attributes: {
            id: "2c7e94e8c1",
            role: "Libretto",
            name: "Giuseppe Adami",
            slug: "giuseppe-adami",
            isHiddenOnEventDetails: false,
          },
          relationships: {},
        },
        {
          id: "612f0db911",
          type: "creatives",
          attributes: {
            id: "612f0db911",
            role: "Libretto",
            name: "Renato Simoni",
            slug: "renato-simoni",
            isHiddenOnEventDetails: false,
          },
          relationships: {},
        },
        {
          id: "6f6e2ed447",
          type: "creatives",
          attributes: {
            id: "6f6e2ed447",
            role: "Director",
            name: "Andrei Serban",
            slug: "andrei-serban",
            isHiddenOnEventDetails: false,
          },
          relationships: {},
        },
        {
          id: "0f0b758426",
          type: "creatives",
          attributes: {
            id: "0f0b758426",
            role: "Designer",
            name: "Sally Jacobs",
            slug: "sally-jacobs",
            isHiddenOnEventDetails: false,
          },
          relationships: {},
        },
        {
          id: "c5be0b4a2e",
          type: "creatives",
          attributes: {
            id: "c5be0b4a2e",
            role: "Lighting designer",
            name: "F. Mitchell Dana",
            slug: "f-mitchell-dana",
            isHiddenOnEventDetails: false,
          },
          relationships: {},
        },
        {
          id: "fb8fe1c15b",
          type: "creatives",
          attributes: {
            id: "fb8fe1c15b",
            role: "Choreographer",
            name: "Kate Flatt",
            slug: "kate-flatt",
            isHiddenOnEventDetails: false,
          },
          relationships: {},
        },
        {
          id: "830",
          type: "tags",
          attributes: {
            title: "Friday Rush",
          },
          relationships: {},
        },
        {
          id: "921",
          type: "tags",
          attributes: {
            title: "Opera and music",
          },
          relationships: {},
        },
        {
          id: "1132",
          type: "tags",
          attributes: {
            title: "Hide cast list",
          },
          relationships: {},
        },
        {
          id: "585",
          type: "tags",
          attributes: {
            title: "Camera filming",
          },
          relationships: {},
        },
        {
          id: "993",
          type: "tags",
          attributes: {
            title: "Young ROH",
          },
          relationships: {},
        },
        {
          id: "51318",
          type: "runs",
          attributes: {
            title: null,
          },
          relationships: {
            activities: {
              data: [
                {
                  id: "51382",
                  type: "activities",
                },
                {
                  id: "51385",
                  type: "activities",
                },
                {
                  id: "51386",
                  type: "activities",
                },
                {
                  id: "51388",
                  type: "activities",
                },
                {
                  id: "51391",
                  type: "activities",
                },
                {
                  id: "51394",
                  type: "activities",
                },
                {
                  id: "51395",
                  type: "activities",
                },
                {
                  id: "51396",
                  type: "activities",
                },
                {
                  id: "51365",
                  type: "activities",
                },
                {
                  id: "51399",
                  type: "activities",
                },
                {
                  id: "51367",
                  type: "activities",
                },
                {
                  id: "51366",
                  type: "activities",
                },
              ],
            },
          },
        },
        {
          id: "51382",
          type: "activities",
          attributes: {
            activityType: "standard",
            date: "2023-03-10T19:00:00+00:00",
            castChange: null,
            title: null,
            shortBackground: null,
            tourPosition: null,
            castListUrl: "/40/turandot-by-andrei-serban/cast-list/51382",
          },
          relationships: {
            tags: {
              data: [
                {
                  id: "1132",
                  type: "tags",
                },
                {
                  id: "830",
                  type: "tags",
                },
                {
                  id: "921",
                  type: "tags",
                },
              ],
            },
            locations: {
              data: [
                {
                  id: "2",
                  type: "locations",
                },
              ],
            },
            performanceTimes: {
              data: [
                {
                  id: "936",
                  type: "performanceTimes",
                },
              ],
            },
            cast: {
              data: [
                {
                  id: "7831f5a191",
                  type: "castRoles",
                },
                {
                  id: "652279be9c",
                  type: "castRoles",
                },
                {
                  id: "3bd6b908a3",
                  type: "castRoles",
                },
                {
                  id: "2fddaf662e",
                  type: "castRoles",
                },
                {
                  id: "7846c5e5c8",
                  type: "castRoles",
                },
                {
                  id: "cdfd221d49",
                  type: "castRoles",
                },
                {
                  id: "2367759f2a",
                  type: "castRoles",
                },
                {
                  id: "f37243a0c4",
                  type: "castRoles",
                },
                {
                  id: "09d15fbb05",
                  type: "castRoles",
                },
                {
                  id: "9e5689f3fe",
                  type: "castRoles",
                },
                {
                  id: "457c33855e",
                  type: "castRoles",
                },
                {
                  id: "0a6db8e597",
                  type: "castRoles",
                },
              ],
            },
            bookingSeason: {
              data: {
                id: "970",
                type: "bookingSeasons",
              },
            },
            onSaleDates: {
              data: [
                {
                  id: "7bc913fcb63af6844fb9f0f7d8728ebeff3db53d",
                  type: "onSaleDate",
                },
                {
                  id: "78bd34d062916a7211879e841e5836837ebf1e7d",
                  type: "onSaleDate",
                },
                {
                  id: "0368e7fe9e76f918e44f37bc580ba2c6e29e6c0f",
                  type: "onSaleDate",
                },
                {
                  id: "9fa817a7c4449862963c10c928fc7f99c7c7ef2b",
                  type: "onSaleDate",
                },
                {
                  id: "b969762b75813505447b675501340351c24c3e8f",
                  type: "onSaleDate",
                },
                {
                  id: "e733c4f5d24b0bebc09c4e418e4030d31e314065",
                  type: "onSaleDate",
                },
                {
                  id: "b2bb63a07f7d782adc37d78c919c0a22e2ea70bf",
                  type: "onSaleDate",
                },
                {
                  id: "daf9b7e51e08fe682a318cb7df94fb2675f5a353",
                  type: "onSaleDate",
                },
              ],
            },
          },
        },
        {
          id: "51385",
          type: "activities",
          attributes: {
            activityType: "standard",
            date: "2023-03-13T19:30:00+00:00",
            castChange: null,
            title:
              "Tickets in the Amphitheatre are only available to Young ROH members",
            shortBackground: null,
            tourPosition: null,
            castListUrl: "/40/turandot-by-andrei-serban/cast-list/51385",
          },
          relationships: {
            tags: {
              data: [
                {
                  id: "921",
                  type: "tags",
                },
                {
                  id: "830",
                  type: "tags",
                },
                {
                  id: "585",
                  type: "tags",
                },
                {
                  id: "1132",
                  type: "tags",
                },
                {
                  id: "993",
                  type: "tags",
                },
              ],
            },
            locations: {
              data: [
                {
                  id: "2",
                  type: "locations",
                },
              ],
            },
            performanceTimes: {
              data: [
                {
                  id: "936",
                  type: "performanceTimes",
                },
              ],
            },
            cast: {
              data: [
                {
                  id: "7831f5a191",
                  type: "castRoles",
                },
                {
                  id: "652279be9c",
                  type: "castRoles",
                },
                {
                  id: "3bd6b908a3",
                  type: "castRoles",
                },
                {
                  id: "2fddaf662e",
                  type: "castRoles",
                },
                {
                  id: "7846c5e5c8",
                  type: "castRoles",
                },
                {
                  id: "cdfd221d49",
                  type: "castRoles",
                },
                {
                  id: "2367759f2a",
                  type: "castRoles",
                },
                {
                  id: "f37243a0c4",
                  type: "castRoles",
                },
                {
                  id: "09d15fbb05",
                  type: "castRoles",
                },
                {
                  id: "9e5689f3fe",
                  type: "castRoles",
                },
                {
                  id: "457c33855e",
                  type: "castRoles",
                },
                {
                  id: "0a6db8e597",
                  type: "castRoles",
                },
              ],
            },
            bookingSeason: {
              data: {
                id: "970",
                type: "bookingSeasons",
              },
            },
            onSaleDates: {
              data: [
                {
                  id: "7bc913fcb63af6844fb9f0f7d8728ebeff3db53d",
                  type: "onSaleDate",
                },
                {
                  id: "78bd34d062916a7211879e841e5836837ebf1e7d",
                  type: "onSaleDate",
                },
                {
                  id: "0368e7fe9e76f918e44f37bc580ba2c6e29e6c0f",
                  type: "onSaleDate",
                },
                {
                  id: "9fa817a7c4449862963c10c928fc7f99c7c7ef2b",
                  type: "onSaleDate",
                },
                {
                  id: "b969762b75813505447b675501340351c24c3e8f",
                  type: "onSaleDate",
                },
                {
                  id: "e733c4f5d24b0bebc09c4e418e4030d31e314065",
                  type: "onSaleDate",
                },
                {
                  id: "b2bb63a07f7d782adc37d78c919c0a22e2ea70bf",
                  type: "onSaleDate",
                },
                {
                  id: "daf9b7e51e08fe682a318cb7df94fb2675f5a353",
                  type: "onSaleDate",
                },
              ],
            },
          },
        },
        {
          id: "51386",
          type: "activities",
          attributes: {
            activityType: "standard",
            date: "2023-03-15T19:30:00+00:00",
            castChange: null,
            title: null,
            shortBackground: null,
            tourPosition: null,
            castListUrl: "/40/turandot-by-andrei-serban/cast-list/51386",
          },
          relationships: {
            tags: {
              data: [
                {
                  id: "1132",
                  type: "tags",
                },
                {
                  id: "830",
                  type: "tags",
                },
                {
                  id: "921",
                  type: "tags",
                },
              ],
            },
            locations: {
              data: [
                {
                  id: "2",
                  type: "locations",
                },
              ],
            },
            performanceTimes: {
              data: [
                {
                  id: "936",
                  type: "performanceTimes",
                },
              ],
            },
            cast: {
              data: [
                {
                  id: "7831f5a191",
                  type: "castRoles",
                },
                {
                  id: "652279be9c",
                  type: "castRoles",
                },
                {
                  id: "bb646eef97",
                  type: "castRoles",
                },
                {
                  id: "2fddaf662e",
                  type: "castRoles",
                },
                {
                  id: "7846c5e5c8",
                  type: "castRoles",
                },
                {
                  id: "cdfd221d49",
                  type: "castRoles",
                },
                {
                  id: "2367759f2a",
                  type: "castRoles",
                },
                {
                  id: "f37243a0c4",
                  type: "castRoles",
                },
                {
                  id: "09d15fbb05",
                  type: "castRoles",
                },
                {
                  id: "9e5689f3fe",
                  type: "castRoles",
                },
                {
                  id: "457c33855e",
                  type: "castRoles",
                },
                {
                  id: "0a6db8e597",
                  type: "castRoles",
                },
              ],
            },
            bookingSeason: {
              data: {
                id: "970",
                type: "bookingSeasons",
              },
            },
            onSaleDates: {
              data: [
                {
                  id: "7bc913fcb63af6844fb9f0f7d8728ebeff3db53d",
                  type: "onSaleDate",
                },
                {
                  id: "78bd34d062916a7211879e841e5836837ebf1e7d",
                  type: "onSaleDate",
                },
                {
                  id: "0368e7fe9e76f918e44f37bc580ba2c6e29e6c0f",
                  type: "onSaleDate",
                },
                {
                  id: "9fa817a7c4449862963c10c928fc7f99c7c7ef2b",
                  type: "onSaleDate",
                },
                {
                  id: "b969762b75813505447b675501340351c24c3e8f",
                  type: "onSaleDate",
                },
                {
                  id: "e733c4f5d24b0bebc09c4e418e4030d31e314065",
                  type: "onSaleDate",
                },
                {
                  id: "b2bb63a07f7d782adc37d78c919c0a22e2ea70bf",
                  type: "onSaleDate",
                },
                {
                  id: "daf9b7e51e08fe682a318cb7df94fb2675f5a353",
                  type: "onSaleDate",
                },
              ],
            },
          },
        },
        {
          id: "51388",
          type: "activities",
          attributes: {
            activityType: "standard",
            date: "2023-03-17T19:30:00+00:00",
            castChange: null,
            title: null,
            shortBackground: null,
            tourPosition: null,
            castListUrl: "/40/turandot-by-andrei-serban/cast-list/51388",
          },
          relationships: {
            tags: {
              data: [
                {
                  id: "1132",
                  type: "tags",
                },
                {
                  id: "830",
                  type: "tags",
                },
                {
                  id: "921",
                  type: "tags",
                },
              ],
            },
            locations: {
              data: [
                {
                  id: "2",
                  type: "locations",
                },
              ],
            },
            performanceTimes: {
              data: [
                {
                  id: "936",
                  type: "performanceTimes",
                },
              ],
            },
            cast: {
              data: [
                {
                  id: "7831f5a191",
                  type: "castRoles",
                },
                {
                  id: "652279be9c",
                  type: "castRoles",
                },
                {
                  id: "3bd6b908a3",
                  type: "castRoles",
                },
                {
                  id: "2fddaf662e",
                  type: "castRoles",
                },
                {
                  id: "7846c5e5c8",
                  type: "castRoles",
                },
                {
                  id: "cdfd221d49",
                  type: "castRoles",
                },
                {
                  id: "2367759f2a",
                  type: "castRoles",
                },
                {
                  id: "f37243a0c4",
                  type: "castRoles",
                },
                {
                  id: "09d15fbb05",
                  type: "castRoles",
                },
                {
                  id: "9e5689f3fe",
                  type: "castRoles",
                },
                {
                  id: "457c33855e",
                  type: "castRoles",
                },
                {
                  id: "0a6db8e597",
                  type: "castRoles",
                },
              ],
            },
            bookingSeason: {
              data: {
                id: "970",
                type: "bookingSeasons",
              },
            },
            onSaleDates: {
              data: [
                {
                  id: "7bc913fcb63af6844fb9f0f7d8728ebeff3db53d",
                  type: "onSaleDate",
                },
                {
                  id: "78bd34d062916a7211879e841e5836837ebf1e7d",
                  type: "onSaleDate",
                },
                {
                  id: "0368e7fe9e76f918e44f37bc580ba2c6e29e6c0f",
                  type: "onSaleDate",
                },
                {
                  id: "9fa817a7c4449862963c10c928fc7f99c7c7ef2b",
                  type: "onSaleDate",
                },
                {
                  id: "b969762b75813505447b675501340351c24c3e8f",
                  type: "onSaleDate",
                },
                {
                  id: "e733c4f5d24b0bebc09c4e418e4030d31e314065",
                  type: "onSaleDate",
                },
                {
                  id: "b2bb63a07f7d782adc37d78c919c0a22e2ea70bf",
                  type: "onSaleDate",
                },
                {
                  id: "daf9b7e51e08fe682a318cb7df94fb2675f5a353",
                  type: "onSaleDate",
                },
              ],
            },
          },
        },
        {
          id: "51391",
          type: "activities",
          attributes: {
            activityType: "standard",
            date: "2023-03-20T19:30:00+00:00",
            castChange: null,
            title: null,
            shortBackground: null,
            tourPosition: null,
            castListUrl: "/40/turandot-by-andrei-serban/cast-list/51391",
          },
          relationships: {
            tags: {
              data: [
                {
                  id: "921",
                  type: "tags",
                },
                {
                  id: "830",
                  type: "tags",
                },
                {
                  id: "1132",
                  type: "tags",
                },
              ],
            },
            locations: {
              data: [
                {
                  id: "2",
                  type: "locations",
                },
              ],
            },
            performanceTimes: {
              data: [
                {
                  id: "936",
                  type: "performanceTimes",
                },
              ],
            },
            cast: {
              data: [
                {
                  id: "7831f5a191",
                  type: "castRoles",
                },
                {
                  id: "652279be9c",
                  type: "castRoles",
                },
                {
                  id: "bb646eef97",
                  type: "castRoles",
                },
                {
                  id: "2fddaf662e",
                  type: "castRoles",
                },
                {
                  id: "7846c5e5c8",
                  type: "castRoles",
                },
                {
                  id: "cdfd221d49",
                  type: "castRoles",
                },
                {
                  id: "2367759f2a",
                  type: "castRoles",
                },
                {
                  id: "f37243a0c4",
                  type: "castRoles",
                },
                {
                  id: "09d15fbb05",
                  type: "castRoles",
                },
                {
                  id: "9e5689f3fe",
                  type: "castRoles",
                },
                {
                  id: "457c33855e",
                  type: "castRoles",
                },
                {
                  id: "0a6db8e597",
                  type: "castRoles",
                },
              ],
            },
            bookingSeason: {
              data: {
                id: "970",
                type: "bookingSeasons",
              },
            },
            onSaleDates: {
              data: [
                {
                  id: "7bc913fcb63af6844fb9f0f7d8728ebeff3db53d",
                  type: "onSaleDate",
                },
                {
                  id: "78bd34d062916a7211879e841e5836837ebf1e7d",
                  type: "onSaleDate",
                },
                {
                  id: "0368e7fe9e76f918e44f37bc580ba2c6e29e6c0f",
                  type: "onSaleDate",
                },
                {
                  id: "9fa817a7c4449862963c10c928fc7f99c7c7ef2b",
                  type: "onSaleDate",
                },
                {
                  id: "b969762b75813505447b675501340351c24c3e8f",
                  type: "onSaleDate",
                },
                {
                  id: "e733c4f5d24b0bebc09c4e418e4030d31e314065",
                  type: "onSaleDate",
                },
                {
                  id: "b2bb63a07f7d782adc37d78c919c0a22e2ea70bf",
                  type: "onSaleDate",
                },
                {
                  id: "daf9b7e51e08fe682a318cb7df94fb2675f5a353",
                  type: "onSaleDate",
                },
              ],
            },
          },
        },
        {
          id: "51394",
          type: "activities",
          attributes: {
            activityType: "standard",
            date: "2023-03-22T19:30:00+00:00",
            castChange: null,
            title: null,
            shortBackground: null,
            tourPosition: null,
            castListUrl: "/40/turandot-by-andrei-serban/cast-list/51394",
          },
          relationships: {
            tags: {
              data: [
                {
                  id: "1132",
                  type: "tags",
                },
                {
                  id: "830",
                  type: "tags",
                },
                {
                  id: "585",
                  type: "tags",
                },
                {
                  id: "921",
                  type: "tags",
                },
              ],
            },
            locations: {
              data: [
                {
                  id: "2",
                  type: "locations",
                },
              ],
            },
            performanceTimes: {
              data: [
                {
                  id: "936",
                  type: "performanceTimes",
                },
              ],
            },
            cast: {
              data: [
                {
                  id: "7831f5a191",
                  type: "castRoles",
                },
                {
                  id: "652279be9c",
                  type: "castRoles",
                },
                {
                  id: "3bd6b908a3",
                  type: "castRoles",
                },
                {
                  id: "2fddaf662e",
                  type: "castRoles",
                },
                {
                  id: "7846c5e5c8",
                  type: "castRoles",
                },
                {
                  id: "cdfd221d49",
                  type: "castRoles",
                },
                {
                  id: "2367759f2a",
                  type: "castRoles",
                },
                {
                  id: "f37243a0c4",
                  type: "castRoles",
                },
                {
                  id: "09d15fbb05",
                  type: "castRoles",
                },
                {
                  id: "9e5689f3fe",
                  type: "castRoles",
                },
                {
                  id: "457c33855e",
                  type: "castRoles",
                },
                {
                  id: "0a6db8e597",
                  type: "castRoles",
                },
              ],
            },
            bookingSeason: {
              data: {
                id: "970",
                type: "bookingSeasons",
              },
            },
            onSaleDates: {
              data: [
                {
                  id: "7bc913fcb63af6844fb9f0f7d8728ebeff3db53d",
                  type: "onSaleDate",
                },
                {
                  id: "78bd34d062916a7211879e841e5836837ebf1e7d",
                  type: "onSaleDate",
                },
                {
                  id: "0368e7fe9e76f918e44f37bc580ba2c6e29e6c0f",
                  type: "onSaleDate",
                },
                {
                  id: "9fa817a7c4449862963c10c928fc7f99c7c7ef2b",
                  type: "onSaleDate",
                },
                {
                  id: "b969762b75813505447b675501340351c24c3e8f",
                  type: "onSaleDate",
                },
                {
                  id: "e733c4f5d24b0bebc09c4e418e4030d31e314065",
                  type: "onSaleDate",
                },
                {
                  id: "b2bb63a07f7d782adc37d78c919c0a22e2ea70bf",
                  type: "onSaleDate",
                },
                {
                  id: "daf9b7e51e08fe682a318cb7df94fb2675f5a353",
                  type: "onSaleDate",
                },
              ],
            },
          },
        },
        {
          id: "51395",
          type: "activities",
          attributes: {
            activityType: "standard",
            date: "2023-03-25T12:00:00+00:00",
            castChange: null,
            title: null,
            shortBackground: null,
            tourPosition: null,
            castListUrl: "/40/turandot-by-andrei-serban/cast-list/51395",
          },
          relationships: {
            tags: {
              data: [
                {
                  id: "921",
                  type: "tags",
                },
                {
                  id: "830",
                  type: "tags",
                },
                {
                  id: "1132",
                  type: "tags",
                },
              ],
            },
            locations: {
              data: [
                {
                  id: "2",
                  type: "locations",
                },
              ],
            },
            performanceTimes: {
              data: [
                {
                  id: "935",
                  type: "performanceTimes",
                },
              ],
            },
            cast: {
              data: [
                {
                  id: "b178b1737d",
                  type: "castRoles",
                },
                {
                  id: "652279be9c",
                  type: "castRoles",
                },
                {
                  id: "bb646eef97",
                  type: "castRoles",
                },
                {
                  id: "2fddaf662e",
                  type: "castRoles",
                },
                {
                  id: "7846c5e5c8",
                  type: "castRoles",
                },
                {
                  id: "cdfd221d49",
                  type: "castRoles",
                },
                {
                  id: "2367759f2a",
                  type: "castRoles",
                },
                {
                  id: "f37243a0c4",
                  type: "castRoles",
                },
                {
                  id: "09d15fbb05",
                  type: "castRoles",
                },
                {
                  id: "9e5689f3fe",
                  type: "castRoles",
                },
                {
                  id: "457c33855e",
                  type: "castRoles",
                },
                {
                  id: "0a6db8e597",
                  type: "castRoles",
                },
              ],
            },
            bookingSeason: {
              data: {
                id: "970",
                type: "bookingSeasons",
              },
            },
            onSaleDates: {
              data: [
                {
                  id: "7bc913fcb63af6844fb9f0f7d8728ebeff3db53d",
                  type: "onSaleDate",
                },
                {
                  id: "78bd34d062916a7211879e841e5836837ebf1e7d",
                  type: "onSaleDate",
                },
                {
                  id: "0368e7fe9e76f918e44f37bc580ba2c6e29e6c0f",
                  type: "onSaleDate",
                },
                {
                  id: "9fa817a7c4449862963c10c928fc7f99c7c7ef2b",
                  type: "onSaleDate",
                },
                {
                  id: "b969762b75813505447b675501340351c24c3e8f",
                  type: "onSaleDate",
                },
                {
                  id: "e733c4f5d24b0bebc09c4e418e4030d31e314065",
                  type: "onSaleDate",
                },
                {
                  id: "b2bb63a07f7d782adc37d78c919c0a22e2ea70bf",
                  type: "onSaleDate",
                },
                {
                  id: "daf9b7e51e08fe682a318cb7df94fb2675f5a353",
                  type: "onSaleDate",
                },
              ],
            },
          },
        },
        {
          id: "51396",
          type: "activities",
          attributes: {
            activityType: "standard",
            date: "2023-03-31T19:30:00+01:00",
            castChange: null,
            title: null,
            shortBackground: null,
            tourPosition: null,
            castListUrl: "/40/turandot-by-andrei-serban/cast-list/51396",
          },
          relationships: {
            tags: {
              data: [
                {
                  id: "1132",
                  type: "tags",
                },
                {
                  id: "830",
                  type: "tags",
                },
                {
                  id: "921",
                  type: "tags",
                },
              ],
            },
            locations: {
              data: [
                {
                  id: "2",
                  type: "locations",
                },
              ],
            },
            performanceTimes: {
              data: [
                {
                  id: "936",
                  type: "performanceTimes",
                },
              ],
            },
            cast: {
              data: [
                {
                  id: "7831f5a191",
                  type: "castRoles",
                },
                {
                  id: "f86bf81830",
                  type: "castRoles",
                },
                {
                  id: "3bd6b908a3",
                  type: "castRoles",
                },
                {
                  id: "91e0c4319b",
                  type: "castRoles",
                },
                {
                  id: "7846c5e5c8",
                  type: "castRoles",
                },
                {
                  id: "cdfd221d49",
                  type: "castRoles",
                },
                {
                  id: "2367759f2a",
                  type: "castRoles",
                },
                {
                  id: "f37243a0c4",
                  type: "castRoles",
                },
                {
                  id: "09d15fbb05",
                  type: "castRoles",
                },
                {
                  id: "9e5689f3fe",
                  type: "castRoles",
                },
                {
                  id: "457c33855e",
                  type: "castRoles",
                },
                {
                  id: "0a6db8e597",
                  type: "castRoles",
                },
              ],
            },
            bookingSeason: {
              data: {
                id: "970",
                type: "bookingSeasons",
              },
            },
            onSaleDates: {
              data: [
                {
                  id: "7bc913fcb63af6844fb9f0f7d8728ebeff3db53d",
                  type: "onSaleDate",
                },
                {
                  id: "78bd34d062916a7211879e841e5836837ebf1e7d",
                  type: "onSaleDate",
                },
                {
                  id: "0368e7fe9e76f918e44f37bc580ba2c6e29e6c0f",
                  type: "onSaleDate",
                },
                {
                  id: "9fa817a7c4449862963c10c928fc7f99c7c7ef2b",
                  type: "onSaleDate",
                },
                {
                  id: "b969762b75813505447b675501340351c24c3e8f",
                  type: "onSaleDate",
                },
                {
                  id: "e733c4f5d24b0bebc09c4e418e4030d31e314065",
                  type: "onSaleDate",
                },
                {
                  id: "b2bb63a07f7d782adc37d78c919c0a22e2ea70bf",
                  type: "onSaleDate",
                },
                {
                  id: "daf9b7e51e08fe682a318cb7df94fb2675f5a353",
                  type: "onSaleDate",
                },
              ],
            },
          },
        },
        {
          id: "51365",
          type: "activities",
          attributes: {
            activityType: "standard",
            date: "2023-04-03T19:30:00+01:00",
            castChange: null,
            title: null,
            shortBackground: null,
            tourPosition: null,
            castListUrl: "/40/turandot-by-andrei-serban/cast-list/51365",
          },
          relationships: {
            tags: {
              data: [
                {
                  id: "830",
                  type: "tags",
                },
                {
                  id: "921",
                  type: "tags",
                },
                {
                  id: "1132",
                  type: "tags",
                },
              ],
            },
            locations: {
              data: [
                {
                  id: "2",
                  type: "locations",
                },
              ],
            },
            performanceTimes: {
              data: [
                {
                  id: "936",
                  type: "performanceTimes",
                },
              ],
            },
            cast: {
              data: [
                {
                  id: "7831f5a191",
                  type: "castRoles",
                },
                {
                  id: "f86bf81830",
                  type: "castRoles",
                },
                {
                  id: "3bd6b908a3",
                  type: "castRoles",
                },
                {
                  id: "91e0c4319b",
                  type: "castRoles",
                },
                {
                  id: "7846c5e5c8",
                  type: "castRoles",
                },
                {
                  id: "cdfd221d49",
                  type: "castRoles",
                },
                {
                  id: "2367759f2a",
                  type: "castRoles",
                },
                {
                  id: "f37243a0c4",
                  type: "castRoles",
                },
                {
                  id: "09d15fbb05",
                  type: "castRoles",
                },
                {
                  id: "9e5689f3fe",
                  type: "castRoles",
                },
                {
                  id: "457c33855e",
                  type: "castRoles",
                },
                {
                  id: "0a6db8e597",
                  type: "castRoles",
                },
              ],
            },
            bookingSeason: {
              data: {
                id: "970",
                type: "bookingSeasons",
              },
            },
            onSaleDates: {
              data: [
                {
                  id: "7bc913fcb63af6844fb9f0f7d8728ebeff3db53d",
                  type: "onSaleDate",
                },
                {
                  id: "78bd34d062916a7211879e841e5836837ebf1e7d",
                  type: "onSaleDate",
                },
                {
                  id: "0368e7fe9e76f918e44f37bc580ba2c6e29e6c0f",
                  type: "onSaleDate",
                },
                {
                  id: "9fa817a7c4449862963c10c928fc7f99c7c7ef2b",
                  type: "onSaleDate",
                },
                {
                  id: "b969762b75813505447b675501340351c24c3e8f",
                  type: "onSaleDate",
                },
                {
                  id: "e733c4f5d24b0bebc09c4e418e4030d31e314065",
                  type: "onSaleDate",
                },
                {
                  id: "b2bb63a07f7d782adc37d78c919c0a22e2ea70bf",
                  type: "onSaleDate",
                },
                {
                  id: "daf9b7e51e08fe682a318cb7df94fb2675f5a353",
                  type: "onSaleDate",
                },
              ],
            },
          },
        },
        {
          id: "51399",
          type: "activities",
          attributes: {
            activityType: "standard",
            date: "2023-04-06T19:30:00+01:00",
            castChange: null,
            title: null,
            shortBackground: null,
            tourPosition: null,
            castListUrl: "/40/turandot-by-andrei-serban/cast-list/51399",
          },
          relationships: {
            tags: {
              data: [
                {
                  id: "921",
                  type: "tags",
                },
                {
                  id: "830",
                  type: "tags",
                },
                {
                  id: "1132",
                  type: "tags",
                },
              ],
            },
            locations: {
              data: [
                {
                  id: "2",
                  type: "locations",
                },
              ],
            },
            performanceTimes: {
              data: [
                {
                  id: "936",
                  type: "performanceTimes",
                },
              ],
            },
            cast: {
              data: [
                {
                  id: "7831f5a191",
                  type: "castRoles",
                },
                {
                  id: "f86bf81830",
                  type: "castRoles",
                },
                {
                  id: "bb646eef97",
                  type: "castRoles",
                },
                {
                  id: "91e0c4319b",
                  type: "castRoles",
                },
                {
                  id: "7846c5e5c8",
                  type: "castRoles",
                },
                {
                  id: "cdfd221d49",
                  type: "castRoles",
                },
                {
                  id: "2367759f2a",
                  type: "castRoles",
                },
                {
                  id: "f37243a0c4",
                  type: "castRoles",
                },
                {
                  id: "09d15fbb05",
                  type: "castRoles",
                },
                {
                  id: "9e5689f3fe",
                  type: "castRoles",
                },
                {
                  id: "457c33855e",
                  type: "castRoles",
                },
                {
                  id: "0a6db8e597",
                  type: "castRoles",
                },
              ],
            },
            bookingSeason: {
              data: {
                id: "970",
                type: "bookingSeasons",
              },
            },
            onSaleDates: {
              data: [
                {
                  id: "7bc913fcb63af6844fb9f0f7d8728ebeff3db53d",
                  type: "onSaleDate",
                },
                {
                  id: "78bd34d062916a7211879e841e5836837ebf1e7d",
                  type: "onSaleDate",
                },
                {
                  id: "0368e7fe9e76f918e44f37bc580ba2c6e29e6c0f",
                  type: "onSaleDate",
                },
                {
                  id: "9fa817a7c4449862963c10c928fc7f99c7c7ef2b",
                  type: "onSaleDate",
                },
                {
                  id: "b969762b75813505447b675501340351c24c3e8f",
                  type: "onSaleDate",
                },
                {
                  id: "e733c4f5d24b0bebc09c4e418e4030d31e314065",
                  type: "onSaleDate",
                },
                {
                  id: "b2bb63a07f7d782adc37d78c919c0a22e2ea70bf",
                  type: "onSaleDate",
                },
                {
                  id: "daf9b7e51e08fe682a318cb7df94fb2675f5a353",
                  type: "onSaleDate",
                },
              ],
            },
          },
        },
        {
          id: "51367",
          type: "activities",
          attributes: {
            activityType: "standard",
            date: "2023-04-08T19:30:00+01:00",
            castChange: null,
            title: null,
            shortBackground: null,
            tourPosition: null,
            castListUrl: "/40/turandot-by-andrei-serban/cast-list/51367",
          },
          relationships: {
            tags: {
              data: [
                {
                  id: "830",
                  type: "tags",
                },
                {
                  id: "921",
                  type: "tags",
                },
                {
                  id: "1132",
                  type: "tags",
                },
              ],
            },
            locations: {
              data: [
                {
                  id: "2",
                  type: "locations",
                },
              ],
            },
            performanceTimes: {
              data: [
                {
                  id: "936",
                  type: "performanceTimes",
                },
              ],
            },
            cast: {
              data: [
                {
                  id: "7831f5a191",
                  type: "castRoles",
                },
                {
                  id: "f86bf81830",
                  type: "castRoles",
                },
                {
                  id: "bb646eef97",
                  type: "castRoles",
                },
                {
                  id: "91e0c4319b",
                  type: "castRoles",
                },
                {
                  id: "7846c5e5c8",
                  type: "castRoles",
                },
                {
                  id: "cdfd221d49",
                  type: "castRoles",
                },
                {
                  id: "2367759f2a",
                  type: "castRoles",
                },
                {
                  id: "f37243a0c4",
                  type: "castRoles",
                },
                {
                  id: "09d15fbb05",
                  type: "castRoles",
                },
                {
                  id: "9e5689f3fe",
                  type: "castRoles",
                },
                {
                  id: "457c33855e",
                  type: "castRoles",
                },
                {
                  id: "0a6db8e597",
                  type: "castRoles",
                },
              ],
            },
            bookingSeason: {
              data: {
                id: "970",
                type: "bookingSeasons",
              },
            },
            onSaleDates: {
              data: [
                {
                  id: "7bc913fcb63af6844fb9f0f7d8728ebeff3db53d",
                  type: "onSaleDate",
                },
                {
                  id: "78bd34d062916a7211879e841e5836837ebf1e7d",
                  type: "onSaleDate",
                },
                {
                  id: "0368e7fe9e76f918e44f37bc580ba2c6e29e6c0f",
                  type: "onSaleDate",
                },
                {
                  id: "9fa817a7c4449862963c10c928fc7f99c7c7ef2b",
                  type: "onSaleDate",
                },
                {
                  id: "b969762b75813505447b675501340351c24c3e8f",
                  type: "onSaleDate",
                },
                {
                  id: "e733c4f5d24b0bebc09c4e418e4030d31e314065",
                  type: "onSaleDate",
                },
                {
                  id: "b2bb63a07f7d782adc37d78c919c0a22e2ea70bf",
                  type: "onSaleDate",
                },
                {
                  id: "daf9b7e51e08fe682a318cb7df94fb2675f5a353",
                  type: "onSaleDate",
                },
              ],
            },
          },
        },
        {
          id: "51366",
          type: "activities",
          attributes: {
            activityType: "standard",
            date: "2023-04-13T19:30:00+01:00",
            castChange: null,
            title: null,
            shortBackground: null,
            tourPosition: null,
            castListUrl: "/40/turandot-by-andrei-serban/cast-list/51366",
          },
          relationships: {
            tags: {
              data: [
                {
                  id: "1132",
                  type: "tags",
                },
                {
                  id: "921",
                  type: "tags",
                },
                {
                  id: "830",
                  type: "tags",
                },
              ],
            },
            locations: {
              data: [
                {
                  id: "2",
                  type: "locations",
                },
              ],
            },
            performanceTimes: {
              data: [
                {
                  id: "936",
                  type: "performanceTimes",
                },
              ],
            },
            cast: {
              data: [
                {
                  id: "b178b1737d",
                  type: "castRoles",
                },
                {
                  id: "f86bf81830",
                  type: "castRoles",
                },
                {
                  id: "bb646eef97",
                  type: "castRoles",
                },
                {
                  id: "91e0c4319b",
                  type: "castRoles",
                },
                {
                  id: "7846c5e5c8",
                  type: "castRoles",
                },
                {
                  id: "cdfd221d49",
                  type: "castRoles",
                },
                {
                  id: "2367759f2a",
                  type: "castRoles",
                },
                {
                  id: "f37243a0c4",
                  type: "castRoles",
                },
                {
                  id: "09d15fbb05",
                  type: "castRoles",
                },
                {
                  id: "9e5689f3fe",
                  type: "castRoles",
                },
                {
                  id: "457c33855e",
                  type: "castRoles",
                },
                {
                  id: "0a6db8e597",
                  type: "castRoles",
                },
              ],
            },
            bookingSeason: {
              data: {
                id: "970",
                type: "bookingSeasons",
              },
            },
            onSaleDates: {
              data: [
                {
                  id: "7bc913fcb63af6844fb9f0f7d8728ebeff3db53d",
                  type: "onSaleDate",
                },
                {
                  id: "78bd34d062916a7211879e841e5836837ebf1e7d",
                  type: "onSaleDate",
                },
                {
                  id: "0368e7fe9e76f918e44f37bc580ba2c6e29e6c0f",
                  type: "onSaleDate",
                },
                {
                  id: "9fa817a7c4449862963c10c928fc7f99c7c7ef2b",
                  type: "onSaleDate",
                },
                {
                  id: "b969762b75813505447b675501340351c24c3e8f",
                  type: "onSaleDate",
                },
                {
                  id: "e733c4f5d24b0bebc09c4e418e4030d31e314065",
                  type: "onSaleDate",
                },
                {
                  id: "b2bb63a07f7d782adc37d78c919c0a22e2ea70bf",
                  type: "onSaleDate",
                },
                {
                  id: "daf9b7e51e08fe682a318cb7df94fb2675f5a353",
                  type: "onSaleDate",
                },
              ],
            },
          },
        },
        {
          id: "2",
          type: "locations",
          attributes: {
            title: "Main Stage",
          },
          relationships: {},
        },
        {
          id: "936",
          type: "performanceTimes",
          attributes: {
            title: "Evening",
          },
          relationships: {},
        },
        {
          id: "7831f5a191",
          type: "castRoles",
          attributes: {
            role: "Conducted by",
            name: "Antonio Pappano",
            slug: "antonio-pappano",
            isHiddenOnEventDetails: false,
          },
          relationships: {
            production: {
              data: {
                id: "2606",
                type: "productions",
              },
            },
          },
        },
        {
          id: "f86bf81830",
          type: "castRoles",
          attributes: {
            role: "Princess Turandot",
            name: "Catherine Foster",
            slug: null,
            isHiddenOnEventDetails: false,
          },
          relationships: {
            production: {
              data: {
                id: "2606",
                type: "productions",
              },
            },
          },
        },
        {
          id: "3bd6b908a3",
          type: "castRoles",
          attributes: {
            role: "Calaf",
            name: "Yonghoon Lee",
            slug: "yonghoon-lee",
            isHiddenOnEventDetails: false,
          },
          relationships: {
            production: {
              data: {
                id: "2606",
                type: "productions",
              },
            },
          },
        },
        {
          id: "91e0c4319b",
          type: "castRoles",
          attributes: {
            role: "Liù",
            name: "Ermonela Jaho",
            slug: "ermonela-jaho",
            isHiddenOnEventDetails: false,
          },
          relationships: {
            production: {
              data: {
                id: "2606",
                type: "productions",
              },
            },
          },
        },
        {
          id: "7846c5e5c8",
          type: "castRoles",
          attributes: {
            role: "Timur",
            name: "Vitalij Kowaljow",
            slug: null,
            isHiddenOnEventDetails: false,
          },
          relationships: {
            production: {
              data: {
                id: "2606",
                type: "productions",
              },
            },
          },
        },
        {
          id: "cdfd221d49",
          type: "castRoles",
          attributes: {
            role: "Ping",
            name: "Hansung Yoo",
            slug: null,
            isHiddenOnEventDetails: false,
          },
          relationships: {
            production: {
              data: {
                id: "2606",
                type: "productions",
              },
            },
          },
        },
        {
          id: "2367759f2a",
          type: "castRoles",
          attributes: {
            role: "Pang",
            name: "Aled Hall",
            slug: "aled-hall",
            isHiddenOnEventDetails: false,
          },
          relationships: {
            production: {
              data: {
                id: "2606",
                type: "productions",
              },
            },
          },
        },
        {
          id: "f37243a0c4",
          type: "castRoles",
          attributes: {
            role: "Pong",
            name: "Michael Gibson",
            slug: "michael-gibson",
            isHiddenOnEventDetails: false,
          },
          relationships: {
            production: {
              data: {
                id: "2606",
                type: "productions",
              },
            },
          },
        },
        {
          id: "09d15fbb05",
          type: "castRoles",
          attributes: {
            role: "Emperor Altoum",
            name: "Alexander Kravets",
            slug: "alexander-kravets",
            isHiddenOnEventDetails: false,
          },
          relationships: {
            production: {
              data: {
                id: "2606",
                type: "productions",
              },
            },
          },
        },
        {
          id: "9e5689f3fe",
          type: "castRoles",
          attributes: {
            role: "Mandarin",
            name: "Blaise Malaba",
            slug: "blaise-malaba",
            isHiddenOnEventDetails: false,
          },
          relationships: {
            production: {
              data: {
                id: "2606",
                type: "productions",
              },
            },
          },
        },
        {
          id: "457c33855e",
          type: "castRoles",
          attributes: {
            role: "Orchestra",
            name: "Orchestra of the Royal Opera House",
            slug: null,
            isHiddenOnEventDetails: false,
          },
          relationships: {
            production: {
              data: {
                id: "2606",
                type: "productions",
              },
            },
          },
        },
        {
          id: "0a6db8e597",
          type: "castRoles",
          attributes: {
            role: "Chorus",
            name: "Royal Opera Chorus",
            slug: null,
            isHiddenOnEventDetails: false,
          },
          relationships: {
            production: {
              data: {
                id: "2606",
                type: "productions",
              },
            },
          },
        },
        {
          id: "970",
          type: "bookingSeasons",
          attributes: {
            season: "22/23",
            bookingPeriod: "Winter",
          },
          relationships: {},
        },
        {
          id: "7bc913fcb63af6844fb9f0f7d8728ebeff3db53d",
          type: "onSaleDate",
          attributes: {
            id: "7bc913fcb63af6844fb9f0f7d8728ebeff3db53d",
            date: "2022-09-08T09:00:00+01:00",
            modesOfSale: [102, 11, 114, 147, 159, 171],
          },
          relationships: {},
        },
        {
          id: "78bd34d062916a7211879e841e5836837ebf1e7d",
          type: "onSaleDate",
          attributes: {
            id: "78bd34d062916a7211879e841e5836837ebf1e7d",
            date: "2022-09-13T09:00:00+01:00",
            modesOfSale: [105, 117, 13, 150, 162, 174],
          },
          relationships: {},
        },
        {
          id: "0368e7fe9e76f918e44f37bc580ba2c6e29e6c0f",
          type: "onSaleDate",
          attributes: {
            id: "0368e7fe9e76f918e44f37bc580ba2c6e29e6c0f",
            date: "2022-01-01T09:00:00+00:00",
            modesOfSale: [37],
          },
          relationships: {},
        },
        {
          id: "9fa817a7c4449862963c10c928fc7f99c7c7ef2b",
          type: "onSaleDate",
          attributes: {
            id: "9fa817a7c4449862963c10c928fc7f99c7c7ef2b",
            date: "2022-09-06T09:00:00+01:00",
            modesOfSale: [
              100, 103, 112, 115, 12, 145, 148, 157, 160, 169, 172, 175, 87,
            ],
          },
          relationships: {},
        },
        {
          id: "b969762b75813505447b675501340351c24c3e8f",
          type: "onSaleDate",
          attributes: {
            id: "b969762b75813505447b675501340351c24c3e8f",
            date: "2022-09-20T09:00:00+01:00",
            modesOfSale: [106, 140, 152, 164, 177, 205, 206, 207, 40, 52, 94],
          },
          relationships: {},
        },
        {
          id: "e733c4f5d24b0bebc09c4e418e4030d31e314065",
          type: "onSaleDate",
          attributes: {
            id: "e733c4f5d24b0bebc09c4e418e4030d31e314065",
            date: "2022-09-27T09:00:00+01:00",
            modesOfSale: [
              10, 108, 110, 141, 143, 153, 155, 165, 167, 176, 193, 194, 195,
              196, 197, 198, 199, 200, 201, 202, 203, 204, 84, 96, 98,
            ],
          },
          relationships: {},
        },
        {
          id: "b2bb63a07f7d782adc37d78c919c0a22e2ea70bf",
          type: "onSaleDate",
          attributes: {
            id: "b2bb63a07f7d782adc37d78c919c0a22e2ea70bf",
            date: "2022-10-25T09:00:00+01:00",
            modesOfSale: [186, 188, 189, 190, 191, 192],
          },
          relationships: {},
        },
        {
          id: "daf9b7e51e08fe682a318cb7df94fb2675f5a353",
          type: "onSaleDate",
          attributes: {
            id: "daf9b7e51e08fe682a318cb7df94fb2675f5a353",
            date: "2022-10-26T09:00:00+01:00",
            modesOfSale: [
              127, 138, 139, 151, 163, 178, 179, 25, 41, 86, 9, 92, 93,
            ],
          },
          relationships: {},
        },
        {
          id: "b178b1737d",
          type: "castRoles",
          attributes: {
            role: "Conducted by",
            name: "Paul Wynne Griffiths",
            slug: "paul-wynne-griffiths",
            isHiddenOnEventDetails: false,
          },
          relationships: {
            production: {
              data: {
                id: "2606",
                type: "productions",
              },
            },
          },
        },
        {
          id: "bb646eef97",
          type: "castRoles",
          attributes: {
            role: "Calaf",
            name: "Russell Thomas",
            slug: null,
            isHiddenOnEventDetails: false,
          },
          relationships: {
            production: {
              data: {
                id: "2606",
                type: "productions",
              },
            },
          },
        },
        {
          id: "652279be9c",
          type: "castRoles",
          attributes: {
            role: "Princess Turandot",
            name: "Anna Pirozzi",
            slug: "anna-pirozzi",
            isHiddenOnEventDetails: false,
          },
          relationships: {
            production: {
              data: {
                id: "2606",
                type: "productions",
              },
            },
          },
        },
        {
          id: "2fddaf662e",
          type: "castRoles",
          attributes: {
            role: "Liù",
            name: "Masabane Cecilia Rangwanasha",
            slug: "masabane-cecilia-rangwanasha",
            isHiddenOnEventDetails: false,
          },
          relationships: {
            production: {
              data: {
                id: "2606",
                type: "productions",
              },
            },
          },
        },
        {
          id: "935",
          type: "performanceTimes",
          attributes: {
            title: "Afternoon",
          },
          relationships: {},
        },
      ],
    },
  ]);

  // const getPerformance = async () => {
  //   const url =
  //     "https://www.roh.org.uk/api/event-details?slug=turandot-by-andrei-serban";
  //   const res = await fetch(url);
  //   const data = await res.json();
  //   console.log(data);
  // };
  console.log(performanceDetails[0].included[14].attributes.date);

  const formatDate = (date) => {
    return date.slice(0, -15).split("-").reverse().join("/");
  };

  useEffect(() => {
    fetch(
      "https://www.roh.org.uk/api/event-details?slug=turandot-by-andrei-serban",
      {
        method: "get",
        headers: { Accept: "*/*" },
      }
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setPerformanceDetails(data);
      })
      .catch((err) => {
        console.log("error");
      });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <Title title={performanceDetails[0].data.attributes.title} />
        <h2 className="App__date">
          Dates:{" "}
          {formatDate(performanceDetails[0].included[14].attributes.date)}
        </h2>
        <p className="App__para">
          {performanceDetails[0].data.attributes.shortDescription.slice(3, -4)}
        </p>
      </header>
      <Title title="Creatives" />
      <CreativeList />
      <Title title="Cast" />
      <CastList />
    </div>
  );
}

export default App;
