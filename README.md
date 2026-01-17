<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Charity: Water Landing Page</title>
  <style>
    body {
      margin: 0;
      font-family: 'Arial', sans-serif;
      background-color: #000000;
    }

    header {
      background-color: #000000;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: -1.5rem 2rem 2rem 2rem;
      color: white;
      flex-wrap: wrap;
      position: relative;
      z-index: 1;
    }

    .left-header {
      display: flex;
      align-items: center;
      gap: 3rem;
    }

    nav {
      display: flex;
      gap: 1.5rem;
      align-items: center;
      margin-top: 8rem;
    }

    nav a {
      cursor: pointer;
      border: 2px solid transparent;
      background-color: #77a8bb;
      color: #003366;
      padding: 0.75rem 1.5rem;
      border-top-left-radius: 10px;
      border-top-right-radius: 10px;
      text-decoration: none;
      font-weight: bold;
      font-size: 1.1rem;
      display: inline-block;
      transition: all 0.3s ease;
    }

    nav a:hover {
      outline: 2px solid white;
      transform: translateY(-2px);
      position: relative;
      z-index: 2;
    }

    .donate-btn {
      background-color: #77a8bb;
      color: #003366;
      padding: 0.75rem 1.5rem;
      position: relative; right: -1200px;
      top: -100px;
      justify-content: space-between;
      border-radius: 8px;
      text-decoration: none;
      font-weight: bold;
      font-size: 1rem;
      transition: all 0.3s ease;
      border: none;
      outline: none;
      display: inline-block;
      margin-top: 0;
    }

    .donate-btn:hover {
      outline: 2px solid white;
      animation: bounceUp 0.5s ease;
      position: space-between;
      z-index: 2;
    }

    .hero {
      background-color: #003366;
      color: white;
      padding: 3rem 2rem 2rem 2rem;
      top: -60px;
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      justify-content: space-between;
      margin: 0.5rem 1rem 2rem 1rem;
      border-radius: 20px;
      position: relative;
      z-index: 1;
    }

    .hero-text {
      max-width: 45%;
    }

    .hero-text h1 {
      font-size: 2rem;
      margin-bottom: 1rem;
    }

    .hero-text p {
      font-size: 1rem;
      margin-bottom: 2rem;
      line-height: 1.5;
    }

    .hashtag {
      background-color: #77a8bb;
      color: #003366;
      padding: 0.5rem 1rem;
      display: inline-block;
      border-radius: 6px;
      font-weight: bold;
      margin-bottom: 1rem;
    }

    .learn-more-btn {
      background-color: #77a8bb;
      color: #003366;
      padding: 1rem 2rem;
      border: none;
      border-radius: 30px;
      font-size: 1rem;
      cursor: pointer;
      font-weight: bold;
      transition: all 0.3s ease;
      display: inline-block;
    }

    .learn-more-btn:hover {
      outline: 2px solid white;
      animation: bounceUp 0.5s ease;
      position: relative;
      z-index: 2;
    }

    @keyframes bounceUp {
      0%, 100% {
        transform: translateY(0);
      }
      50% {
        transform: translateY(-10px);
      }
    }

    .hero-images {
      display: flex;
      flex-wrap: wrap;
      gap: 1rem;
      max-width: 50%;
      justify-content: center;
    }

    .hero-images img {
      object-fit: cover;
      border-radius: 12px;
    }

    .hero-images img:nth-child(1) {
      width: 100%;
      max-height: 300px;
      opacity: 0.9;
      border-radius: 20px;
      box-shadow: 0 0 15px rgba(255,255,255,0.2);
    }
    .hero-images img:nth-child(2) {
      width: 160px;
      height: 160px;
      border-radius: 50%;
      object-position: center top;
    }
    .hero-images img:nth-child(3) {
      width: 160px;
      height: 160px;
      border-radius: 50%;
      object-position: center top;
    }
    .hero-images img:nth-child(4) {
      width: 45%;
      height: auto;
    }

  </style>
</head>
<body>
  <header>
    <div class="left-header">
      <img src="https://i.postimg.cc/NMhk08fw/charitywater-logo-horizontal-White-Text.png" alt="Charity: Water Logo" style="height: 40px;">
      <nav>
        <a href="#">Home</a>
        <a href="#">About us</a>
        <a href="#">What do we do?</a>
      </nav>
    </div>
    <button type="button" class="donate-btn" style="margin-right: auto; margin-left: auto; margin-top: 0.5rem;">Donate Here →</button>
  </header>

  <section class="hero">
    <div class="hero-text">
      <div class="hashtag">#jointhemovement</div>
      <h1>Change Starts with Us,<br>Clean Water for all</h1>
      <p>Advocate and use your voice to make a difference in the lives of others, join now to help give water for those in need. Learn how you can be a part of this organization today.</p>
      <button class="learn-more-btn">Learn More →</button>
    </div>
  <div class="hero-images">
    <img src="https://cdn2.dropmarkusercontent.com/52043/000aea4976304b7ccd077f6e1400e0173f7def9e08c73387d1d9807beb5eb3ba/charity_water_Tanzania_TaraShupePhotography_0071.jpg?Expires=1752122506&Signature=bEr3eXCM~P7AMzAZVbnSgeuivf1bNSG7ducQ8x5kgBVIeIME-YvVm8~gMt4zgQwrP2ZX4EobTAlNOi3mcDfHRVZw1zebfMYwBSb6KDLZXIF~Eo805sZYS9PrvzOqZ2PG5zGt431yOv-0kJcwAdYTIye2iISd7IsyscpONY3NEcWy4qw~NzXMMrkU4ev5UC0pZGqYsofoY08UkSK31A40mAUMEv1-TctS5kxDRw1lpb154f6hGKDD89M2ZuaH4D77ZB80yRzeZ57VusnZ66QtkBA2BziCvgqCtU2OMLmmUJWASh~A2tbyo95UisqglQRPMuAK5sUimBu72HbEByWEtg__&Key-Pair-Id=APKAITQYWVEN757ZA4KQ" alt="Water Image 1">
  </div>
  </section>
</body>
</html>
