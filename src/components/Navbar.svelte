<script>
  import cryptoFaxReportLogoIcon from "../images/cryptofaxreport-logo-icon.svg";
  import cryptoFaxReportLogoText from "../images/cryptofaxreport-logo-text.svg";
  import "../styles/global.css";
  import BrandDetailsStore from "../../src/stores/BrandDetails.Store.js";
  import { onDestroy } from "svelte";

  BrandDetailsStore.subscribe((data) => {
    // console.log(data);
  });

  const unsubscribe = BrandDetailsStore.subscribe((data) => {
    // console.log(data);
  });

  onDestroy(unsubscribe);

  let menuItemsNew = $BrandDetailsStore[0]["menuItems"];
  let subMenuServices = $BrandDetailsStore[0]["serviceListName"];
</script>

<div id="mainNavContainer">
  <div id="leftSide">
    <div id="logoIcon">
      <a href="#">
        <img
          src={cryptoFaxReportLogoIcon.src}
          alt="CryptoFaxReport.com Logo Icon"
        /></a
      >
    </div>
    <div id="logoText">
      <a href="#"
        ><img
          src={cryptoFaxReportLogoText.src}
          alt="CryptoFaxReport.com Logo Text"
        /></a
      >
    </div>
  </div>
  <div id="rightSide">
    <div id="desktop-menu">
      <nav>
        <ul>
          {#each menuItemsNew as { name, url }, index}
            {#if name === "CFR Academy"}
              <li>
                <a title={name} href={url} aria-label={name}>{name}</a>
                <ul>
                  {#each subMenuServices as { serviceName, serviceURL }, index}
                    <li>
                      <a
                        title={serviceName}
                        class="dropbtn"
                        href={serviceURL}
                        aria-label={serviceName}>➤ {serviceName}</a
                      >
                    </li>
                  {/each}
                </ul>
              </li>
            {:else if index === menuItemsNew.length - 2}
              <!-- For the second last item -->
              <li>
                <a id="buttonArea1" href={url} aria-label={name}
                  ><span class="buttonStyle1">{name}</span></a
                >
              </li>
            {:else if index === menuItemsNew.length - 1}
              <!-- For the last item -->
              <li>
                <a id="buttonArea2" href={url} aria-label={name}
                  ><span class="buttonStyle1">{name}</span></a
                >
              </li>
            {:else}
              <li>
                <a title={name} href={url} aria-label={name}>{name}</a>
              </li>
            {/if}
          {/each}
        </ul>
      </nav>
    </div>

    <!--mobile nav start -->
    <div class="hamburger-menu">
      <input id="menu__toggle" type="checkbox" />
      <label class="menu__btn" for="menu__toggle">
        <span></span>
      </label>
      <ul class="menu__box">
        {#each menuItemsNew as { name, url }, index}
          {#if name === "CFR Academy"}
            <li>
              <a class="menu__item" title={name} href={url} aria-label={name}
                >{name}</a
              >
              <ul class="submenu">
                {#each subMenuServices as { serviceName, serviceURL }, index}
                  <li>
                    <a
                      title={name}
                      class="menu__item"
                      href={serviceURL}
                      aria-label={serviceName}>• {serviceName}</a
                    >
                  </li>
                {/each}
              </ul>
            </li>
          {:else}
            <li>
              <a class="menu__item" href={url} aria-label={name}>{name}</a>
            </li>
          {/if}
        {/each}
      </ul>
    </div>
    <!--mobile nav end -->
  </div>
</div>

<style>
  /* Extra small devices (phones, 600px and down) */
 @media only screen and (max-width: 600px) {
    #mainNavContainer {
      display: flex;
      justify-content: space-between;
      align-items: center;
      background-color: var(--primaryColor);
      width: 100%;
      height: 72px;
      position: sticky;
      top: 0;
      z-index: 1000;
      gap: 10px;
    }

    #leftSide {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      font-family: var(--primaryFontFamily);
      margin-left: 1.6rem;
    }

    #rightSide {
      display: flex;
      justify-content: flex-end;
      align-items: center;
      margin-right: 3.6rem;
    }

    #logoText {
      padding-left: 0.56rem;
    }

    #logoText > img {
      width: 150px;
    }

    #logoIcon > img {
      width: 40px;
    }

    nav {
      font-family: var(--primaryFontFamily);
      margin-left: 1.8rem;
      font-size: 0.89rem;
      font-weight: 400;
    }

    nav a {
      font-family: var(--primaryFontFamily);
      color: var(--secondaryColor);
      margin-left: 1.8rem;
      text-decoration: none;
      transition: color 0.3s ease;
    }

    nav a:visited {
      font-family: var(--primaryFontFamily);
      color: var(--secondaryColor);
      margin-left: 1.8rem;
      text-decoration: none;
      transition: color 0.3s ease;
    }

    nav a:hover {
      font-family: var(--primaryFontFamily);
      color: var(--complimentaryColor);
      margin-left: 1.8rem;
      text-decoration: none;
      transition: color 0.3s ease;
    }

    nav a:active {
      font-family: var(--primaryFontFamily);
      color: var(--complimentaryColor);
      margin-left: 1.8rem;
      text-decoration: none;
      transition: color 0.3s ease;
    }

    #buttonArea1 {
      font-family: var(--primaryFontFamily);
      margin-right: -0.9rem;
    }

    /*mobile nav styling start*/
    #menu__toggle {
      opacity: 0;
    }
    #menu__toggle:checked + .menu__btn > span {
      transform: rotate(45deg);
    }
    #menu__toggle:checked + .menu__btn > span::before {
      top: 0;
      transform: rotate(0deg);
    }
    #menu__toggle:checked + .menu__btn > span::after {
      top: 0;
      transform: rotate(90deg);
    }
    #menu__toggle:checked ~ .menu__box {
      /* left: 0 !important; */
      right: 0px !important;
    }
    .menu__btn {
      position: fixed;
      top: 35px;
      /* left: 20px; */
      width: 26px;
      height: 26px;
      cursor: pointer;
      z-index: 1;
    }
    .menu__btn > span,
    .menu__btn > span::before,
    .menu__btn > span::after {
      display: block;
      position: absolute;
      width: 100%;
      height: 2px;
      background-color: var(--complimentaryColor);
      transition-duration: 0.25s;
    }
    .menu__btn > span::before {
      content: "";
      top: -8px;
    }
    .menu__btn > span::after {
      content: "";
      top: 8px;
    }
    .menu__box {
      display: block;
      position: fixed;
      top: 0;
      /* left: -100%; */
      right: -100%;
      width: 300px;
      height: 100%;
      margin: 0;
      padding: 80px 0;
      list-style: none;
      background-color: rgba(0, 0, 0, 0.9);
      box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.4);
      transition-duration: 0.25s;
    }
    .menu__item {
      font-family: var(--primaryFontFamily);
      display: block;
      padding: 12px 24px;
      color: var(--secondaryColor);
      font-size: 1rem;
      font-weight: 400;
      text-decoration: none;
      transition-duration: 0.25s;
      line-height: 150%;
    }
    .menu__item:hover {
      background-color: var(--primaryColor);
      color: var(--complimentaryColor);
    }
    /*mobile nav styling end*/

    .hamburger-menu {
      display: block;
    }

    #desktop-menu {
      display: none;
    }

    li > a:after {
      content: " »";
    } /* Change this in order to change the Dropdown symbol */

    li > a:only-child:after {
      content: "";
    }

    .menu__box .submenu {
      display: none;
    }

    .menu__box li:hover > .submenu {
      display: block;
      padding-left: 1.5rem;
    }
  }

  /* Small devices (portrait tablets and large phones, 600px and up) */
  @media only screen and (min-width: 600px) {
    #mainNavContainer {
      display: flex;
      justify-content: space-between;
      align-items: center;
      background-color: var(--primaryColor);
      width: 100%;
      height: 72px;
      position: sticky;
      top: 0;
      z-index: 1000;
      gap: 10px;
    }

    #leftSide {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      font-family: var(--primaryFontFamily);
      margin-left: 3.6rem;
    }

    #rightSide {
      display: flex;
      justify-content: flex-end;
      align-items: center;
      margin-right: 3.6rem;
    }

    #logoText {
      padding-left: 0.56rem;
    }

    nav {
      font-family: var(--primaryFontFamily);
      margin-left: 1.8rem;
      font-size: 0.89rem;
      font-weight: 400;
    }

    nav a {
      font-family: var(--primaryFontFamily);
      color: var(--secondaryColor);
      margin-left: 1.8rem;
      text-decoration: none;
      transition: color 0.3s ease;
    }

    nav a:visited {
      font-family: var(--primaryFontFamily);
      color: var(--secondaryColor);
      margin-left: 1.8rem;
      text-decoration: none;
      transition: color 0.3s ease;
    }

    nav a:hover {
      font-family: var(--primaryFontFamily);
      color: var(--complimentaryColor);
      margin-left: 1.8rem;
      text-decoration: none;
      transition: color 0.3s ease;
    }

    nav a:active {
      font-family: var(--primaryFontFamily);
      color: var(--complimentaryColor);
      margin-left: 1.8rem;
      text-decoration: none;
      transition: color 0.3s ease;
    }

    #buttonArea1 {
      font-family: var(--primaryFontFamily);
      margin-right: -0.9rem;
    }

    /*mobile nav styling start*/
    #menu__toggle {
      opacity: 0;
    }
    #menu__toggle:checked + .menu__btn > span {
      transform: rotate(45deg);
    }
    #menu__toggle:checked + .menu__btn > span::before {
      top: 0;
      transform: rotate(0deg);
    }
    #menu__toggle:checked + .menu__btn > span::after {
      top: 0;
      transform: rotate(90deg);
    }
    #menu__toggle:checked ~ .menu__box {
      /* left: 0 !important; */
      right: 0px !important;
    }
    .menu__btn {
      position: fixed;
      top: 35px;
      /* left: 20px; */
      width: 26px;
      height: 26px;
      cursor: pointer;
      z-index: 1;
    }
    .menu__btn > span,
    .menu__btn > span::before,
    .menu__btn > span::after {
      display: block;
      position: absolute;
      width: 100%;
      height: 2px;
      background-color: var(--complimentaryColor);
      transition-duration: 0.25s;
    }
    .menu__btn > span::before {
      content: "";
      top: -8px;
    }
    .menu__btn > span::after {
      content: "";
      top: 8px;
    }
    .menu__box {
      display: block;
      position: fixed;
      top: 0;
      /* left: -100%; */
      right: -100%;
      width: 300px;
      height: 100%;
      margin: 0;
      padding: 20px 0;
      list-style: none;
      background-color: rgba(0, 0, 0, 0.9);
      box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.4);
      transition-duration: 0.25s;
    }
    .menu__item {
      font-family: var(--primaryFontFamily);
      display: block;
      padding: 12px 24px;
      color: var(--secondaryColor);
      font-size: 1rem;
      font-weight: 400;
      text-decoration: none;
      transition-duration: 0.25s;
      line-height: 150%;
    }
    .menu__item:hover {
      background-color: var(--primaryColor);
      color: var(--complimentaryColor);
    }
    /*mobile nav styling end*/

    .hamburger-menu {
      display: block;
    }

    #desktop-menu {
      display: none;
    }
  }

  /* Medium devices (landscape tablets, 768px and up) */
  @media only screen and (min-width: 768px) {
    #mainNavContainer {
      display: flex;
      justify-content: space-between;
      align-items: center;
      background-color: var(--primaryColor);
      width: 100%;
      height: 72px;
      position: sticky;
      top: 0;
      z-index: 1000;
      gap: 10px;
    }

    #leftSide {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      font-family: var(--primaryFontFamily);
      margin-left: 3.6rem;
    }

    #rightSide {
      display: flex;
      justify-content: flex-end;
      align-items: center;
      margin-right: 3.6rem;
    }

    #logoText {
      padding-left: 0.56rem;
    }

    nav {
      font-family: var(--primaryFontFamily);
      margin-left: 1.8rem;
      font-size: 0.89rem;
      font-weight: 400;
    }

    nav a {
      font-family: var(--primaryFontFamily);
      color: var(--secondaryColor);
      margin-left: 1.8rem;
      text-decoration: none;
      transition: color 0.3s ease;
    }

    nav a:visited {
      font-family: var(--primaryFontFamily);
      color: var(--secondaryColor);
      margin-left: 1.8rem;
      text-decoration: none;
      transition: color 0.3s ease;
    }

    nav a:hover {
      font-family: var(--primaryFontFamily);
      color: var(--complimentaryColor);
      margin-left: 1.8rem;
      text-decoration: none;
      transition: color 0.3s ease;
    }

    nav a:active {
      font-family: var(--primaryFontFamily);
      color: var(--complimentaryColor);
      margin-left: 1.8rem;
      text-decoration: none;
      transition: color 0.3s ease;
    }

    #buttonArea1 {
      font-family: var(--primaryFontFamily);
      margin-right: -0.9rem;
    }

    /*mobile nav styling start*/
    #menu__toggle {
      opacity: 0;
    }
    #menu__toggle:checked + .menu__btn > span {
      transform: rotate(45deg);
    }
    #menu__toggle:checked + .menu__btn > span::before {
      top: 0;
      transform: rotate(0deg);
    }
    #menu__toggle:checked + .menu__btn > span::after {
      top: 0;
      transform: rotate(90deg);
    }
    #menu__toggle:checked ~ .menu__box {
      /* left: 0 !important; */
      right: 0px !important;
    }
    .menu__btn {
      position: fixed;
      top: 35px;
      /* left: 20px; */
      width: 26px;
      height: 26px;
      cursor: pointer;
      z-index: 1;
    }
    .menu__btn > span,
    .menu__btn > span::before,
    .menu__btn > span::after {
      display: block;
      position: absolute;
      width: 100%;
      height: 2px;
      background-color: var(--complimentaryColor);
      transition-duration: 0.25s;
    }
    .menu__btn > span::before {
      content: "";
      top: -8px;
    }
    .menu__btn > span::after {
      content: "";
      top: 8px;
    }
    .menu__box {
      display: block;
      position: fixed;
      top: 0;
      /* left: -100%; */
      right: -100%;
      width: 300px;
      height: 100%;
      margin: 0;
      padding: 80px 0;
      list-style: none;
      background-color: rgba(0, 0, 0, 0.9);
      box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.4);
      transition-duration: 0.25s;
    }
    .menu__item {
      font-family: var(--primaryFontFamily);
      display: block;
      padding: 12px 24px;
      color: var(--secondaryColor);
      font-size: 1rem;
      font-weight: 400;
      text-decoration: none;
      transition-duration: 0.25s;
      line-height: 150%;
    }
    .menu__item:hover {
      background-color: var(--primaryColor);
      color: var(--complimentaryColor);
    }
    /*mobile nav styling end*/

    .hamburger-menu {
      display: block;
    }

    #desktop-menu {
      display: none;
    }
  }

  /* Large devices (laptops/desktops, 992px and up) */
  @media only screen and (min-width: 992px) {
    #mainNavContainer {
      display: flex;
      justify-content: space-between;
      align-items: center;
      background-color: var(--primaryColor);
      width: 100%;
      height: 72px;
      position: sticky;
      top: 0;
      z-index: 1000;
      gap: 10px;
    }

    #leftSide {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      font-family: var(--primaryFontFamily);
      margin-left: 3.6rem;
    }

    #rightSide {
      display: flex;
      justify-content: flex-end;
      align-items: center;
      margin-right: 3.6rem;
    }

    #logoText {
      padding-left: 0.56rem;
    }

    #buttonArea1 {
      font-family: var(--primaryFontFamily);
      margin-right: -0.9rem;
    }

   

    .hamburger-menu {
      display: none;
    }

    #desktop-menu {
      display: block;
    }

    nav {
      font-family: var(--primaryFontFamily);
      font-weight: 600;
      text-align: center;
      font-family: var(--primaryFontFamily);
      margin-left: 1.8rem;
      font-size: 0.89rem;
      font-weight: 400;
      white-space: nowrap;
    }

    nav ul {
      /* font-family: var(--primaryFontFamily);
      font-weight: 600;
      text-align: center;
      font-family: var(--primaryFontFamily);
      margin-left: 1.8rem;
      font-size: 0.89rem;
      font-weight: 400; */
      white-space: nowrap;
    }

    nav ul li {
      position: relative;
      display: inline-block;
    }

    li > a:after {
      content: " »";
      /* display: inline-block; */
      transform: rotate(90deg);
      /* margin-right: 0.5rem;
      margin-left:0.4rem; */
      white-space: nowrap;
    } /* Change this in order to change the Dropdown symbol */

    li > a:only-child:after {
      content: "";
      white-space: nowrap;
    }

    nav ul li a {
      font-family: var(--primaryFontFamily);
      color: var(--secondaryColor);
      margin-left: 1.8rem;
      text-decoration: none;
      transition: color 0.3s ease;
      white-space: nowrap;
    }

    nav ul li a {
      font-family: var(--primaryFontFamily);
      color: var(--secondaryColor);
      margin-left: 1.8rem;
      text-decoration: none;
      transition: color 0.3s ease;
      white-space: nowrap;
    }

    nav ul li a:active {
      font-family: var(--primaryFontFamily);
      color: var(--secondaryColor);
      margin-left: 1.8rem;
      text-decoration: none;
      transition: color 0.3s ease;
      white-space: nowrap;
    }

    nav ul li a:visited {
      font-family: var(--primaryFontFamily);
      color: var(--secondaryColor);
      margin-left: 1.8rem;
      text-decoration: none;
      transition: color 0.3s ease;
      white-space: nowrap;
    }

    nav ul li a:hover {
      font-family: var(--primaryFontFamily);
      color: var(--complimentaryColor);
      margin-left: 1.8rem;
      text-decoration: none;
      transition: color 0.3s ease;
      white-space: nowrap;
    }

    /*styling for hover item*/
     nav ul li ul {
      margin: 0;
      display: none;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      padding-right:25px;
      position: absolute;
      background-color: var(--primaryColor);
      height: 100px;
      z-index: 10;
      top:15px;
      margin-left:-100px;
      border-radius:6px;
      border-color:#fff;
      border-width:2px;
      border-style:solid;
      white-space: nowrap;
      
    }

    nav ul li:hover ul {
      margin: 0;
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      padding-right:25px;
      position: absolute;
      background-color: var(--primaryColor);
      height: 100px;
      z-index: 10;
      top:15px;
      margin-left:-100px;
      border-radius:6px;
      border-color:#fff;
      border-width:2px;
      border-style:solid;
      white-space: nowrap;
    }

   

    nav ul li ul li {
      margin:0;
      white-space: nowrap;
   }

  

  }
</style>
