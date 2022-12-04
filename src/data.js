import { getQuizData } from './utils/sessionStorage.js';
/* Program Data

  in this file you can declare variables to store important data for your program
  the data can only be primitives, objects or arrays
  do not store dom elements in these variables!!!!

  these variables will be imported by your handlers when necessary
    not by your logic
    not by your listeners
*/

export const quizData = getQuizData() || {
  currentQuestionIndex: 0,
  currentScore: 0,
  // the questions in the quiz
  questions: [
    {
      text: 'What is the name of the Twitter bird?',
      answers: {
        a: 'Nick',
        b: 'Larry',
        c: 'Jerry',
      },
      correct: 'b',
      selected: null,
      links: [
        {
          text: 'The Twitter Logo And Brand',
          href: 'https://logo.com/blog/twitter-logo',
        },
        {
          text: 'Twitter Logo: What Famous Bird Stands For',
          href: 'https://www.logaster.com/blog/twitter-logo/',
        },
      ],
    },
    {
      text: 'In which country is H0 H0 H0 Santa’s postcode?',
      answers: {
        a: 'Norway',
        b: 'Australia',
        c: 'Canada',
      },
      correct: 'c',
      selected: null,
      links: [
        {
          text: 'Santa is real!',
          href:
            'https://www.ndtv.com/offbeat/santa-is-real-postal-code-is-h0h-0h0-canada-defends-the-myth-544115',
        },
        {
          text: 'Wikipedia',
          href:
            'https://en.wikipedia.org/wiki/Postal_codes_in_Canada#:~:text=The%20postal%20code%20H0H%200H0,reads%20%22Ho%20ho%20ho%22.',
        },
      ],
    },
    {
      text: 'What does Volkswagen make (besides cars)?',
      answers: {
        a: 'Sausages',
        b: 'Beer',
        c: 'Clothes',
      },
      correct: 'a',
      selected: null,
      links: [
        {
          text: 'Does Volkswagen Manufacture Anything besides Vehicles?',
          href:
            'https://www.aboutmechanics.com/does-volkswagen-manufacture-anything-besides-cars.htm',
        },
        {
          text: 'Wikipedia',
          href:
            'https://en.wikipedia.org/wiki/Volkswagen_currywurst#:~:text=Volkswagen%20currywurst%20is%20a%20brand,given%20away%20to%20Volkswagen%20customers.',
        },
      ],
    },
    {
      text: 'How fast was the first person convicted of speeding going?',
      answers: {
        a: '8 mph',
        b: '20 mph',
        c: '40 mph',
      },
      correct: 'a',
      selected: null,
      links: [
        {
          text: 'Wikipedia',
          href:
            'https://en.wikipedia.org/wiki/Speed_limit?fbclid=IwAR0KyizR-Dwfkj89fNfz3K9mBbWv8kQkS0rkRdSivBNL3go2PlkspjSzfOo#History',
        },
        {
          text: 'Speed limits in Netherlands',
          href: 'https://en.wikipedia.org/wiki/Speed_limits_in_the_Netherlands',
        },
      ],
    },
    {
      text: 'Where can you find the smallest bone in the human body?',
      answers: {
        a: 'In the foot',
        b: 'In the hand',
        c: 'In the ear',
      },
      correct: 'c',
      selected: null,
      links: [
        {
          text: 'Wikipedia',
          href: 'https://en.wikipedia.org/wiki/Stapes',
        },
        {
          text: 'Healthline',
          href: 'https://www.healthline.com/human-body-maps/stapes-bone#1',
        },
      ],
    },
    {
      text: 'Where was the Hawaiian pizza invented?',
      answers: {
        a: 'Canada',
        b: 'USA',
        c: 'Italy',
      },
      correct: 'a',
      selected: null,
      links: [
        {
          text: 'Wikipedia',
          href: 'https://en.wikipedia.org/wiki/Hawaiian_pizza',
        },
        {
          text: 'BBC. Pineapple on pizza.',
          href:
            'https://www.bbc.co.uk/bitesize/articles/z2vftrd#:~:text=The%20origin%20of%20the%20Hawaiian&text=But%20the%20Hawaiian%20pizza%2C%20topped,Greek%20immigrant%20called%20Sam%20Panopoulos.',
        },
      ],
    },
    {
      text:
        'What did pirates wear because they were believed to improve their eyesight?',
      answers: {
        a: 'A Hat',
        b: 'Earings',
        c: 'Black boots',
      },
      correct: 'b',
      selected: null,
      links: [
        {
          text: 'The traditional pirates stereotypes',
          href:
            'https://www.optimax.co.uk/blog/pirates-believe-earrings-improved-eyesight/',
        },
        {
          text: 'Livescience Article',
          href:
            'https://www.livescience.com/33099-why-did-pirates-wear-earrings-.html',
        },
      ],
    },
    {
      text:
        'How many calories would you burn if you bang your head against a wall for one hour?',
      answers: {
        a: '50',
        b: '150',
        c: '1000',
      },
      correct: 'b',
      selected: null,
      links: [
        {
          text: 'Factzpedia',
          href:
            'https://www.factzpedia.com/2021/03/banging-your-head-against-wall-for-one.html',
        },
        {
          text: 'To find a help',
          href:
            'https://www.top10.com/online-therapy/rotw-comparison?utm_source=google&kw=online%20therapy&c=605504651975&t=search&p=&m=b&adpos=&dev=c&devmod=&mobval=0&network=g&campaignid=14456317350&adgroupid=135318380582&targetid=kwd-11476751&interest=&physical=9102997&feedid=&a=7977&ts=&topic=&gender=&age=&agerange=&audience=&gclid=Cj0KCQiA-JacBhC0ARIsAIxybyPJ6nd2DqL0OiMUHfsvl3Vr-uWat50XRSY16X-__uoGCWIltNPmr8waAvUuEALw_wcB',
        },
      ],
    },
    {
      text: 'Which country has the most pyramids?',
      answers: {
        a: 'Egypt',
        b: 'Peru',
        c: 'Sudan',
      },
      correct: 'c',
      selected: null,
      links: [
        {
          text: 'Wikipedia',
          href:
            'https://en.wikipedia.org/wiki/Pyramid#:~:text=While%20pyramids%20are%20associated%20with,queens%20of%20Napata%20and%20Mero%C3%AB.',
        },
        {
          text: 'Intro: Africa',
          href: 'https://intro.africa/story/the-nubian-pyramids-of-sudan/',
        },
      ],
    },
    {
      text: 'Which country are French fries from?',
      answers: {
        a: 'Belgium',
        b: 'France',
        c: 'Netherlands',
      },
      correct: 'a',
      selected: null,
      links: [
        {
          text: 'National Geographic',
          href:
            "https://www.nationalgeographic.com/culture/article/are-french-fries-truly-french#:~:text=It's%20said%20that%20this%20dish,tasty%20potatoes%20%E2%80%9CFrench%E2%80%9D%20fries.",
        },
        {
          text: 'Wikipedia',
          href: 'https://en.wikipedia.org/wiki/French_fries',
        },
      ],
    },
  ],
};
