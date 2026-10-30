/* =====================================================================
   Western Elite — Scale House Agent Passport
   PROGRAM DEFINITION
   ---------------------------------------------------------------------
   This is the only file you need to edit when the level program changes.
   Source: "Scale House Levels Manager" v5 (8/2025)

   Item ids are permanent. Never renumber or reuse an id — saved passports
   reference them. To retire an item, add  retired: true  instead of
   deleting it. To add an item, append a new id.
   ===================================================================== */

var ATT_INFO = 'Attendance is scored as points lost (lower is better). Unapproved early out: 0.25. Tardy: 0.5. Day-of call out: 1. Call out with no coverage: 0.5. No call no show: 2.';

window.PROGRAM = {
  version: '2026.10.23',
  sourceDoc: 'Scale House Levels Manager — Version 5 (8/2025)',
  org: 'Western Elite',
  title: 'Scale House Agent Passport',

  yards: ['Henderson', 'Wynn', 'Nellis'],

  intro: {
    heading: 'Western Elite Scale House Level Program',
    body: [
      'The Scale House Agent Level Program gives every agent a clear, structured pathway for growth. It recognizes and rewards dedication, skill development, and performance with opportunities to advance through distinct levels — each tied to increased responsibilities, enhanced skills, and wage increases.',
      'To move up: meet the performance goals, complete the required training, demonstrate consistent growth in leadership, teamwork and initiative, and then level up with a promotion, a wage increase, and new responsibilities.',
      'Levels must be maintained. Once an agent has achieved a higher level they are required to hold that level’s standards. After coaching, a down-level move with a pay decrease is possible if standards are not sustained.'
    ]
  },

  /* ---------------------------------------------------------------
     LEVELS
     gates[]  — performance gates. target: null renders as "TBD".
     groups[] — checklist groups of items.
     items[]  — { id, label, note?, sub?[], tbd? }
     advance[]— the "eligible to move up when" criteria (also checkable)
     --------------------------------------------------------------- */
  levels: [

    /* ============================== TRAINING ============================== */
    {
      id: 'nat',
      code: 'T',
      name: 'New Agent Training',
      short: 'Training',
      wage: 18.00,
      tenure: 'Minimum 60 days as a Training Agent',
      rule: 'Minimum 60 days as a Training Agent. Performance review at 60–90 days. Additional time may be added during the training level. Level advancement is possible when the agent can complete everything below without assistance for a 30-day period.',
      gates: [],
      groups: [
        {
          id: 'nat.encore',
          title: 'Encore / Material Ticket',
          lead: 'Know how to:',
          items: [
            { id: 'nat.encore.login', label: 'Log into the Encore system' },
            { id: 'nat.encore.lookup', label: 'Look up customer info' },
            { id: 'nat.encore.newticket', label: 'Create a new scale ticket' },
            { id: 'nat.encore.user5', label: 'Add notes to the Encore ticket in the “User 5” section', note: 'Extra costs, tires, TVs, unload fees' },
            { id: 'nat.encore.accounts', label: 'Create new customer accounts and child accounts' },
            { id: 'nat.encore.cc', label: 'Process credit card payments for all COD accounts', note: 'Always provide a receipt to the customer' },
            { id: 'nat.encore.close', label: 'Close a scale ticket and collect payment' },
            { id: 'nat.encore.post', label: 'Post tickets and stack them in numerical order' },
            { id: 'nat.encore.batch', label: 'Add cash transactions to Payment Batching', note: 'Under Charge and Payment Batch Processing' }
          ]
        },
        {
          id: 'nat.gen',
          title: 'General Policies, Procedures & Tools',
          lead: 'Understand / know how to:',
          items: [
            { id: 'nat.gen.attendance', label: 'Meet expectations for time and attendance' },
            {
              id: 'nat.gen.preshift', label: 'Complete the Pre-Shift Checklist',
              sub: [
                { id: 'nat.gen.preshift.cash', label: 'Count cash box' },
                { id: 'nat.gen.preshift.change', label: 'Grab change, if needed' },
                { id: 'nat.gen.preshift.sheets', label: 'Pull up / fill out sheets' },
                { id: 'nat.gen.preshift.water', label: 'Check for water and ice' },
                { id: 'nat.gen.preshift.kiosks', label: 'Clean kiosks' },
                { id: 'nat.gen.preshift.mcod', label: 'Check MCOD email' }
              ]
            },
            { id: 'nat.gen.comms', label: 'Communicate effectively — responsive on Radio / Teams / Zoom chat' },
            { id: 'nat.gen.cashbox', label: 'Operate the cash box and ask for change' },
            { id: 'nat.gen.mrfcash', label: 'Use the MRF Daily Cash Log' },
            { id: 'nat.gen.allinone', label: 'Use the Scale House All-In-One' },
            { id: 'nat.gen.trailers', label: 'Use the MRF Trailers Log' },
            { id: 'nat.gen.mrs', label: 'MRS Material Recycling — create a recycling ticket' },
            { id: 'nat.gen.refresher', label: 'Complete the Scale House Refresher' },
            { id: 'nat.gen.refund', label: 'Use the Refund Log' }
          ]
        }
      ],
      advance: [
        { id: 'nat.adv.30day', label: 'Completes every item above without assistance for a continuous 30-day period' },
        { id: 'nat.adv.60day', label: 'Minimum 60 days served as a Training Agent' },
        { id: 'nat.adv.review', label: '60–90 day performance review completed' }
      ]
    },

    /* ============================== LEVEL 1 ============================== */
    {
      id: 'l1',
      code: '1',
      name: 'Level 1 — Learning',
      short: 'Level 1',
      wage: 19.00,
      tenure: 'Must advance to Level 2 within 8 months of hire date',
      rule: 'Agents cannot live in Level 1. An agent must advance to Level 2 within 8 months of hire date or employment is in review.',
      gates: [
        { id: 'l1.g.acct', label: 'Accounting accuracy', target: 99, unit: '%' },
        { id: 'l1.g.ticket', label: 'Ticket accuracy', target: 99, unit: '%' },
        { id: 'l1.g.cashbox', label: 'Cash box accuracy', target: 93, unit: '%' },
        { id: 'l1.g.cs', label: 'Customer service scores', target: 85, unit: '%' },
        { id: 'l1.g.attendance', label: 'Time / attendance', target: 2.5, unit: '', max: true, info: ATT_INFO }
      ],
      gateWindow: 'Held across a full 60-day review window',
      groups: [
        {
          id: 'l1.gen',
          title: 'General Policies, Procedures & Tools',
          lead: 'Know how to:',
          items: [
            { id: 'l1.gen.pricing', label: 'Know MRF pricing for all three yards' },
            { id: 'l1.gen.materials', label: 'Know the materials that are sold and their pricing — know your yard' },
            { id: 'l1.gen.comments', label: 'Navigate and search within the Comments tab' },
            { id: 'l1.gen.history', label: 'Interpret the Customer History tab, including invoices', note: 'Explain credits and charges to customers' },
            { id: 'l1.gen.mobilehomes', label: 'Measure and price mobile homes' },
            { id: 'l1.gen.hik', label: 'Log in to Hik Central Control Client' }
          ]
        },
        {
          id: 'l1.cs',
          title: 'Customer Service',
          items: [
            { id: 'l1.cs.training', label: 'Complete and pass the Scale House Customer Service Training (required for Level 2)', tbd: true, note: 'TBD — training program still to be built' },
            { id: 'l1.cs.escalated', label: 'Handle escalated interactions' }
          ]
        }
      ],
      advance: [
        { id: 'l1.adv.unaided', label: 'Performs all Level 1 skills without help' },
        { id: 'l1.adv.gates', label: 'Held every performance gate across a full 60-day review window' }
      ]
    },

    /* ============================== LEVEL 2 ============================== */
    {
      id: 'l2',
      code: '2',
      name: 'Level 2 — Independent',
      short: 'Level 2',
      wage: 21.00,
      tenure: 'All Level 2 skills required within 1 year of employment',
      rule: 'Level 2 agents accomplish all Level 1 skills with no assistance. All Level 2 skills are required within 1 year of employment.',
      gates: [
        { id: 'l2.g.acct', label: 'Accounting accuracy', target: 99.5, unit: '%' },
        { id: 'l2.g.ticket', label: 'Ticket accuracy', target: 99.5, unit: '%' },
        { id: 'l2.g.cashbox', label: 'Cash box accuracy', target: 95, unit: '%' },
        { id: 'l2.g.cs', label: 'Customer service scores', target: 90, unit: '%' },
        { id: 'l2.g.attendance', label: 'Time / attendance', target: 2, unit: '', max: true, info: ATT_INFO }
      ],
      gateWindow: 'Sustained at the Level 2 bar across the 3-month window',
      groups: [
        {
          id: 'l2.own',
          title: 'What You Own',
          lead: 'Demonstrated at an advanced level for a minimum of 90 days. Ownership of these is based on actual performance and manager\u2019s discretion and approval:',
          items: [
            { id: 'l2.own.cv.safety', label: 'Safety First — follow yard and scale house safety rules, report hazards and unsafe loads' },
            { id: 'l2.own.cv.beam', label: 'Be a team player — back up teammates and other yards, share information, and cover the radio / Teams chat for each other' },
            { id: 'l2.own.cv.wow', label: 'Deliver WOW — greet every customer, explain tickets and charges clearly, and turn problems into good experiences' },
            { id: 'l2.own.cv.results', label: 'Deliver Results — hit your accuracy, attendance and customer service gates and own your numbers' },
            { id: 'l2.own.typeii', label: 'Type II / crusher knowledge', note: 'Send pictures and ticket info for rejected loads' },
            { id: 'l2.own.yardage', label: 'Measure customer trailers and loads and find yardage' },
            { id: 'l2.own.mrf', label: 'MRF knowledge' },
            { id: 'l2.own.threeyards', label: 'Able to work at all three yards' },
            { id: 'l2.own.email', label: 'Email invoices and scale tickets to customers' },
            { id: 'l2.own.serviceorders', label: 'Understand service orders when customers ask' },
            { id: 'l2.own.dumpsterpricing', label: 'Knowledgeable of dumpster rental pricing' },
            { id: 'l2.own.dumpstercount', label: 'Dumpster count at the Henderson yard' },
            {
              id: 'l2.own.leadership', label: 'Demonstrate leadership skills',
              note: 'Integrity · swift effective communication · strong decision-making · resilience · self-awareness · empathy · vision · ability to inspire others · team focus · team building'
            }
          ]
        }
      ],
      advance: [
        { id: 'l2.adv.unaided', label: 'Performs all Level 1 + Level 2 skills without help' },
        { id: 'l2.adv.sustained', label: 'Sustained delivery at the Level 2 bar across the 3-month window' }
      ]
    },

    /* ============================== LEVEL 3 ============================== */
    {
      id: 'l3',
      code: '3',
      name: 'Level 3 — Advanced',
      short: 'Level 3',
      wage: 23.50,
      tenure: 'Sustained Level 3 performance',
      rule: 'Level 3 agents accomplish all Level 1–2 skills with no assistance and own their own performance results.',
      gates: [
        { id: 'l3.g.acct', label: 'Accounting accuracy', target: 99.8, unit: '%' },
        { id: 'l3.g.ticket', label: 'Ticket accuracy', target: 99.8, unit: '%' },
        { id: 'l3.g.cashbox', label: 'Cash box accuracy', target: 97, unit: '%' },
        { id: 'l3.g.cs', label: 'Customer service scores', target: 95, unit: '%' },
        { id: 'l3.g.attendance', label: 'Time / attendance', target: 1.5, unit: '', max: true, info: ATT_INFO }
      ],
      gateWindow: 'Demonstrated at an advanced level for a minimum of 60 days',
      groups: [
        {
          id: 'l3.own',
          retired: true,   // whole section removed (Oct 2026); ids kept for saved passports
          title: 'What You Own',
          lead: 'Demonstrated at an advanced level for a minimum of 60 days:',
          items: [
            { id: 'l3.own.comments', label: 'Log customer comments', retired: true },
            { id: 'l3.own.selfmanage', label: 'Manage individual performance goals on a trailing 90-day basis', retired: true },
            { id: 'l3.own.cashbox', retired: true, label: 'Self-manage cash box accuracy — count and log the actual cash box amount at lunch and at end of day', note: 'Logged in the Cash Box tab (2x daily while on shift)' }
          ]
        }
      ],
      advanceTitle: 'Eligible to move up to Senior Agent when:',
      advance: [
        { id: 'l3.adv.unaided', label: 'Performs all Level 1–3 skills without help' },
        { id: 'l3.adv.t90', label: 'Holds the trailing 90-day goal set', retired: true },
        { id: 'l3.adv.year', label: 'Holds Level 3 gates for 1 year' }
      ]
    }
  ],

  /* ---------------------------------------------------------------
     ENDORSEMENTS — minimum Level 2 to be eligible
     --------------------------------------------------------------- */
  endorsements: {
    eligibility: 'To be eligible for endorsements, an agent must be a minimum Level 2 agent. Nellis endorsements do not stack: an agent holds either Nellis Yard — Primary or Nellis Yard — Backup, not both.',
    items: [
      { id: 'end.trainer', label: 'Trainer', pay: 0.50, note: 'Learn the new scale house agent training program and be able to train new agents' },
      { id: 'end.tbd1', label: 'Additional endorsement', pay: null, tbd: true, retired: true, note: 'TBD — replaced by the Nellis Yard endorsements' },
      { id: 'end.tbd2', label: 'Additional endorsement', pay: null, tbd: true, note: 'TBD — to be defined' },
      /* group: items sharing a group are one endorsement slot; only one can be held at a time */
      { id: 'end.nellis.primary', group: 'nellis', label: 'Nellis Yard — Primary', pay: 2.00, note: 'Nellis is your assigned home yard. You run the Nellis scale house on your regular schedule and own its accuracy, cash box and customer service. Paid while Nellis is your assigned yard; ends if you are reassigned.' },
      { id: 'end.nellis.backup',  group: 'nellis', label: 'Nellis Yard — Backup',  pay: 0.50, note: 'Trained and signed off on Nellis yard procedures and ready to cover Nellis shifts when needed (call-outs, vacations, busy days).' }
    ]
  },

  /* ---------------------------------------------------------------
     SENIOR AGENT
     --------------------------------------------------------------- */
  senior: {
    id: 'senior',
    label: 'Senior Agent',
    pay: 1.00,
    rule: 'An agent must hold Level 3 for at least one year to become a Senior Agent, and is then eligible for a $1.00 wage increase after sustaining Level 3 and all endorsements for 4 consecutive quarters. Additional requirements to come.',
    requirements: [
      { id: 'senior.l3year', label: 'Has been a Level 3 agent for at least 1 year', note: 'More requirements to come' }
    ],
    quarters: [
      { id: 'senior.q1', label: 'Quarter 1' },
      { id: 'senior.q2', label: 'Quarter 2' },
      { id: 'senior.q3', label: 'Quarter 3' },
      { id: 'senior.q4', label: 'Quarter 4' }
    ]
  },

  /* ---------------------------------------------------------------
     DATA TAB — scorecard numbers per agent (Data tab + leader dashboard)
     Edit labels / values here; ids are stored with each entry, so never
     reuse an id for something different.
     --------------------------------------------------------------- */
  data: {
    // Ticket accuracy = 1 - (sum of these errors) / (check-ins + check-outs)
    errorTypes: [
      { id: 'wrong_acct', label: 'Wrong customer / account # in Encore or ticket' },
      { id: 'weight',     label: 'Weight / yardage or minimum amount' },
      { id: 'duplicate',  label: 'Duplicate ticket / not entered in Encore' },
      { id: 'no_unloads', label: 'No unloads' },
      { id: 'no_tvs',     label: 'No TVs' },
      { id: 'type2',      label: 'Type 2 error' },
      { id: 'no_tires',   label: 'No tires' }
    ],
    // Accounting accuracy = average of these three (each shown on its own too)
    accounting: [
      { id: 'payment',  label: 'Payment collected correctly', how: '1 - COD not collected / COD tickets checked out' },
      { id: 'cash',     label: 'Cash count balanced',         how: 'share of lunch and end-of-day counts that balanced' },
      { id: 'pastdue',  label: 'No past-due customers let through', how: '1 - past-due customers let through / check-ins' }
    ],
    // Customer service checklist (same questions as the Google Form). 3 points each; N/A counts as full points.
    csPoints: 3,
    csQuestions: [
      { id: 'greet',     q: 'Did the agent greet the customer promptly and professionally, making eye contact?' },
      { id: 'rapport',   q: 'Did the agent say anything to build trust/rapport with the customer?' },
      { id: 'card',      q: 'At entrance scale, if the agent does not know the customer, did they ask for their account card and provide one if the customer has none?', na: true },
      { id: 'efficient', q: 'Did the agent handle the customer efficiently without unnecessary delays? (find the customer quickly in Encore, run the transaction quickly, etc.)' },
      { id: 'clear',     q: 'Was the agent clear and easy to understand, and did they listen attentively to the customer?' },
      { id: 'prohibited',q: 'Did the agent ask prohibited waste / add-on material questions at entrance scale?', na: true },
      { id: 'mincharge', q: 'Did the agent properly communicate the minimum charge and fuel surcharge?', na: true },
      { id: 'attitude',  q: 'Did the agent maintain a positive, helpful attitude?' },
      { id: 'knowledge', q: 'If appropriate, did the agent have the product knowledge the customer was looking for?', na: true },
      { id: 'thank',     q: 'Did the agent thank the customer by name?' },
      { id: 'dress',     q: 'Was the agent dressed appropriately and presentable, including a clean kiosk and no distracting screens or audio/noise, according to the handbook?' }
    ],
    // Attendance points (lower is better), same values as the Time / attendance gate
    attendance: [
      { id: 'early_out',   label: 'Unapproved early out',   pts: 0.25 },
      { id: 'tardy',       label: 'Tardy',                  pts: 0.5 },
      { id: 'no_coverage', label: 'Call out with no coverage', pts: 0.5 },
      { id: 'day_of',      label: 'Day-of call out',        pts: 1 },
      { id: 'ncns',        label: 'No call no show',        pts: 2 }
    ],
    // Cash drawer bank per kiosk. Over / short = counted - bank.
    kiosks: [
      { id: 'Nellis Kiosk 1', bank: 400 },
      { id: 'Nellis Kiosk 2', bank: 400 },
      { id: 'Hen Kiosk 3',    bank: 500 },
      { id: 'Hen Kiosk 4',    bank: 500 },
      { id: 'Wynn',           bank: 400 }
    ],
    cashCounts: [
      { id: 'lunch', label: 'Lunch' },
      { id: 'eod',   label: 'End of day' }
    ],
    cashTolerance: 0   // dollars of over/short still counted as balanced
  },

  coachingSources: ['Supervisor', 'Manager', 'Self', 'Peer', 'Customer', 'QA review']
};
