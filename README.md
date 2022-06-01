<div id="top"></div>

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/jdouglass/collection-coffee/">
    <img src="images/logo.png" alt="Logo" width="80" height="80">
  </a>

  <h2 align="center">Collection Coffee</h2>

  <p align="center">
    An aggregator website to track the latest coffee bean releases!
    <br />
    <a href="https://collection.coffee">Live Site</a>
    ·
    <a href="https://github.com/jdouglass/collection-coffee/issues">Report Bug</a>
    ·
    <a href="https://github.com/jdouglass/collection-coffee/issues">Request Feature</a>
  </p>
</div>



<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

[![Product Name Screen Shot][product-screenshot]](https://collection.coffee)

The idea of this website was created with the help of my friends who are deeply invested in drinking specialty coffee. There are tons of specialty coffee roasters within Canada and sometimes going through each roaster's website can be annoying to do. So here comes the birth of Collection Coffee.

Collection Coffee scrapes several Canadian coffee roasters to aggregate all of the latest coffee products into one single web page for your viewing. Everyday at 12pm and 12am PST, scripts are run to scrape off of the coffee roasters product pages and the results are displayed on our home page. We also have several product filters to help you narrow down the product list so you can hopefully fine a coffee of your liking and purchase it from the roaster's web page.

<p align="right">(<a href="#top">back to top</a>)</p>

### Built With

This website is built using the PERN stack along with NGINX to host both the frontend and backend together on one AWS EC2 instance.

* [React.js](https://reactjs.org/)
* [Mantine](https://mantine.dev)
* [Express](https://expressjs.com)
* [PostgreSQL](https://postgresql.org)
* [AWS](https://aws.amazon.com)
* [NGINX](https://nginx/com)

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- USAGE EXAMPLES -->
## Usage

Even if you aren't into specialty coffee or even coffee in general, this project could be turned into something that you actually are more interested about instead. Maybe you want to create Collection Clothes, Collection Cars, Collection Electronics, the options are endless. As long as it's something you're passionate about, you could make something similar to this as well.

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- ROADMAP -->
## Roadmap

- Scrape the following coffee roasters
  - [x] Pirates of Coffee
  - [x] Subtext
  - [x] Monogram
  - [ ] Revolver
  - [ ] Rogue Wave
  - [ ] David Kim
  - [ ] Nemesis
  - [ ] Timbertrain
- [ ] Add Changelog
- [ ] Add Contact Us page
- [ ] Add header bar
- [ ] Add About page
- [ ] Add favicon
- [ ] Add some more styling, and colour theme
- [ ] Figure out how to do a CI/CD pipeline
- [ ] Improve on the security
- [ ] Figure out how to add logging to the cron jobs

See the [open issues][issues-url] for a full list of proposed features (and known issues).

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Clone the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- CONTACT -->
## Contact

Your Name - johnathondouglass@gmail.com

Project Link: [https://github.com/jdouglass/collection-coffee/](https://github.com/jdouglass/collection-coffee/)

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[issues-shield]: https://img.shields.io/github/issues/othneildrew/Best-README-Template.svg?style=for-the-badge
[issues-url]: https://github.com/jdouglass/collection-coffee/issues
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://www.linkedin.com/in/johnathondouglass/
[product-screenshot]: images/screenshot.png
