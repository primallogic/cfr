import { writable } from "svelte/store";

const BrandDetailsStore = writable([
  {
    businessName: "",
    businessSlogan: "",
    businessAddress: "",
    businessPhone: "",
    yearEstablished: "",
    yearsInTheIndustry: "",
    mainService: "",
    primaryCity: "",
    county: "",
    state: "",
    founderName: "",
    primaryEmail: "",
    facebookLink: "",
    twitterLink: "",
    linkedinLink: "",
    instagramLink: "",
    corporateCompany: "",

    testimonialList: [
      {
        thumbnail: "",
        quote: "",
        name: "",
        city: "",
        state: "",
      },
    ],

    menuItems: [
      {
        name: "Home",
        url: "/",
      },
      {
        name: "Reports",
        url: "/reports",
      },
      {
        name: "CFR Academy",
        url: "/cfr-academy",
      },

      {
        name: "Contact",
        url: "/contact",
      },

      {
        name: "Login",
        url: "/login",
      },
      {
        name: "Sign up",
        url: "/sign-up",
      },
    ],

    serviceListName: [
      {
        serviceName: "Crypto Course",
        serviceImage: "#",
        serviceURL: "/courses/crypto-course",
      },
      {
        serviceName: "NFT Course",
        serviceImage: "#",
        serviceURL: "/courses/nft-course",
      },
      {
        serviceName: "Stock Course",
        serviceImage: "#",
        serviceURL: "/courses/stock-course",
      },
      
    ],
  },
]);

export default BrandDetailsStore;
