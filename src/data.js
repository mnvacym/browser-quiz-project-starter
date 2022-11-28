/* Program Data

  in this file you can declare variables to store important data for your program
  the data can only be primitives, objects or arrays
  do not store dom elements in these variables!!!!

  these variables will be imported by your handlers when necessary
    not by your logic
    not by your listeners
*/

export const quizData = {
  currentQuestionIndex: 0,
  // the questions in the quiz
  questions: [
    {
      text: 'What are the different ways to declare a JS variable?',
      answers: {
        a: 'constant, let, variable',
        b: 'var, const, let, function',
        c: 'var, let, const',
      },
      correct: 'c',
      selected: null,
      links: [
        {
          text: 'javascript.info',
          href: 'https://javascript.info/variables',
        },
        {
          text: 'Tyler McGinnis',
          href: 'https://ui.dev/var-let-const/',
        },
      ],
    },
    {
      text: 'What does `typeof` do?',
      answers: {
        a: 'changes the type of a primitive value',
        b: 'returns a string describing the type of a value',
        c: 'determines if a value is primitive',
        d: 'can tell the difference between arrays and objects',
      },
      correct: 'b',
      selected: null,
      links: [
        {
          text: 'javascript.info',
          href: 'https://javascript.info/types#type-typeof',
        },
        {
          text: 'MDN',
          href:
            'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof',
        },
      ],
    },
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
          text: 'empty',
          href: '#',
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
          text: 'empty',
          href: '#',
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
          text: 'empty',
          href: '#',
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
          text: 'Wikipedia. Speed limit.',
          href:
            'https://en.wikipedia.org/wiki/Speed_limit?fbclid=IwAR0KyizR-Dwfkj89fNfz3K9mBbWv8kQkS0rkRdSivBNL3go2PlkspjSzfOo#History',
        },
        {
          text: 'empty',
          href: '#',
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
          text: 'empty',
          href: '#',
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
          text: 'empty',
          href: '#',
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
          text: 'empty',
          href: '#',
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
          text: 'empty',
          href: '#',
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
          text: 'empty',
          href: '#',
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
          text: 'empty',
          href: '#',
        },
      ],
    },
  ],
};
