export interface Faq { q: string; a: string }
export interface Step { title: string; text: string }
export interface Scenario { title: string; intro: string; items: string[]; outro: string }
export interface City {
  slug: string;
  name: string;
  state: string;
  stateName: string;
  county: string;
  formName: string;
  title: string;
  description: string;
  h1Bottom: string;
  hero: string;
  localNoteTitle: string;
  localNote: string;
  whyHeading: string;
  why: string[];
  steps: Step[];
  faqs: Faq[];
  nearby: string[];
  summaryFees?: boolean;
  summarySteps?: boolean;
  scenario?: Scenario;
  blurb: string;
}

export const brand = "Chicago Wholesale Double Close";
export const domain = "chicago.wholesaledoubleclose.click";
export const trustBar = ["Published funding fees", "Purchase and resale review", "Chicago Metro service areas"];
export const cities: City[] = [
  {
    "slug": "chicago",
    "name": "Chicago",
    "state": "IL",
    "stateName": "Illinois",
    "county": "Cook County",
    "formName": "Chicago-Wholesale-Double-Close-Form",
    "title": "Double Close Funding in Chicago, IL | Chicago Wholesale Double Close",
    "description": "Transactional funding review for a wholesale double closing in Chicago, Illinois. Review the fee schedule and submit the actual purchase and resale details.",
    "h1Bottom": "in Chicago, Illinois",
    "hero": "Chicago has a recognized bungalow tradition alongside other neighborhood housing types. For a bungalow deal, describe the actual property and any known occupancy or title questions. A familiar building style is not proof that the purchase and resale files are ready. Our transactional funding review brings the purchase, resale and closing arrangements together for that specific property. Send both prices and the documents you have; funding can be ready in as little as 24 hours.",
    "localNoteTitle": "Prepare the Chicago transaction file",
    "localNote": "For a bungalow deal, describe the actual property and any known occupancy or title questions. A familiar building style is not proof that the purchase and resale files are ready. Each sale needs its own contract and settlement requirements. Ask your closing office and qualified advisers which documents and state-specific rules apply before committing to the structure.",
    "whyHeading": "A review based on the Chicago property",
    "why": [
      "A Chicago transaction needs a review of the specific purchase and resale, not a decision based on the neighborhood alone. Submit the actual property details and identify any questions already raised by your closing office.",
      "Your Chicago funding request should identify the end buyer and any open contract conditions. Include the closing office so the review follows the actual transaction plan.",
      "The published fee schedule is a starting point for estimating the funding charge. Confirm the written terms and both sets of settlement costs before deciding whether the transaction works."
    ],
    "steps": [
      {
        "title": "Submit the property details",
        "text": "Send the Chicago, IL address, both agreed prices and the proposed closing date. Include the signed contracts you have and flag any documents still outstanding."
      },
      {
        "title": "Review both contracts",
        "text": "We review the purchase, resale and funding request with the information you provide. Missing documents or unresolved title conditions may affect whether the file can proceed."
      },
      {
        "title": "Confirm the closing plan",
        "text": "If the file is approved, the closing team confirms funding instructions and settlement requirements. Both transactions must follow the agreed sequence and written terms."
      }
    ],
    "faqs": [
      {
        "q": "What local details matter in Chicago?",
        "a": "Chicago has a recognized bungalow tradition alongside other neighborhood housing types. For a bungalow deal, describe the actual property and any known occupancy or title questions. A familiar building style is not proof that the purchase and resale files are ready."
      },
      {
        "q": "What should I submit for a Chicago review?",
        "a": "Send the exact Chicago, IL property address, both contracts, the end buyer's status and closing office. Identify missing documents and any unresolved conditions."
      },
      {
        "q": "What is a double closing?",
        "a": "A double closing uses two separate sales of the same property. You purchase from the seller and then sell to your end buyer, subject to the contracts and closing requirements for each transaction."
      },
      {
        "q": "What does transactional funding cost?",
        "a": "The published schedule starts at {{tier1Rate}} for funding up to {{tier1Cap}}, with a {{tier1Minimum}} minimum. Additional days, multiple closing companies and special paperwork can add costs, so confirm the written terms for your file."
      },
      {
        "q": "Does submitting a deal guarantee funding?",
        "a": "No. A submission requests a review of your purchase, resale and closing arrangements. Funding depends on the specific file and the applicable terms."
      }
    ],
    "nearby": [
      "oak-park",
      "cicero",
      "evanston"
    ],
    "blurb": "Chicago has a recognized bungalow tradition alongside other neighborhood housing types."
  },
  {
    "slug": "aurora",
    "name": "Aurora",
    "state": "IL",
    "stateName": "Illinois",
    "county": "Kane County",
    "formName": "Chicago-Wholesale-Double-Close-Form",
    "title": "Double Close Funding in Aurora, IL | Chicago Wholesale Double Close",
    "description": "Transactional funding review for a wholesale double closing in Aurora, Illinois. Review the fee schedule and submit the actual purchase and resale details.",
    "h1Bottom": "in Aurora, Illinois",
    "hero": "Aurora has its own downtown and visitor destinations in the Fox River region. Distinguish the actual municipality and parcel from a general Fox Valley location. Provide the contracts and explain any conditions the end buyer still needs to satisfy. Our transactional funding review brings the purchase, resale and closing arrangements together for that specific property. Send both prices and the documents you have; funding can be ready in as little as 24 hours.",
    "localNoteTitle": "Prepare the Aurora transaction file",
    "localNote": "Distinguish the actual municipality and parcel from a general Fox Valley location. Provide the contracts and explain any conditions the end buyer still needs to satisfy. Each sale needs its own contract and settlement requirements. Ask your closing office and qualified advisers which documents and state-specific rules apply before committing to the structure.",
    "whyHeading": "A review based on the Aurora property",
    "why": [
      "A Aurora transaction needs a review of the specific purchase and resale, not a decision based on the neighborhood alone. Submit the actual property details and identify any questions already raised by your closing office.",
      "Your Aurora funding request should identify the end buyer and any open contract conditions. Include the closing office so the review follows the actual transaction plan.",
      "The published fee schedule is a starting point for estimating the funding charge. Confirm the written terms and both sets of settlement costs before deciding whether the transaction works."
    ],
    "steps": [
      {
        "title": "Submit the property details",
        "text": "Send the Aurora, IL address, both agreed prices and the proposed closing date. Include the signed contracts you have and flag any documents still outstanding."
      },
      {
        "title": "Review both contracts",
        "text": "We review the purchase, resale and funding request with the information you provide. Missing documents or unresolved title conditions may affect whether the file can proceed."
      },
      {
        "title": "Confirm the closing plan",
        "text": "If the file is approved, the closing team confirms funding instructions and settlement requirements. Both transactions must follow the agreed sequence and written terms."
      }
    ],
    "faqs": [
      {
        "q": "What local details matter in Aurora?",
        "a": "Aurora has its own downtown and visitor destinations in the Fox River region. Distinguish the actual municipality and parcel from a general Fox Valley location. Provide the contracts and explain any conditions the end buyer still needs to satisfy."
      },
      {
        "q": "What should I submit for a Aurora review?",
        "a": "Send the exact Aurora, IL property address, both contracts, the end buyer's status and closing office. Identify missing documents and any unresolved conditions."
      },
      {
        "q": "What is a double closing?",
        "a": "A double closing uses two separate sales of the same property. You purchase from the seller and then sell to your end buyer, subject to the contracts and closing requirements for each transaction."
      },
      {
        "q": "What does transactional funding cost?",
        "a": "The published schedule starts at {{tier1Rate}} for funding up to {{tier1Cap}}, with a {{tier1Minimum}} minimum. Additional days, multiple closing companies and special paperwork can add costs, so confirm the written terms for your file."
      },
      {
        "q": "Does submitting a deal guarantee funding?",
        "a": "No. A submission requests a review of your purchase, resale and closing arrangements. Funding depends on the specific file and the applicable terms."
      }
    ],
    "nearby": [
      "chicago"
    ],
    "blurb": "Aurora has its own downtown and visitor destinations in the Fox River region."
  },
  {
    "slug": "naperville",
    "name": "Naperville",
    "state": "IL",
    "stateName": "Illinois",
    "county": "DuPage County",
    "formName": "Chicago-Wholesale-Double-Close-Form",
    "title": "Double Close Funding in Naperville, IL | Chicago Wholesale Double Close",
    "description": "Transactional funding review for a wholesale double closing in Naperville, Illinois. Review the fee schedule and submit the actual purchase and resale details.",
    "h1Bottom": "in Naperville, Illinois",
    "hero": "Naperville's visitor destinations and Riverwalk give its downtown a distinct identity. A downtown location can help describe a property, but it cannot establish its resale value. Send the actual contract prices and identify the buyer rather than treating a neighborhood label as underwriting. Our transactional funding review brings the purchase, resale and closing arrangements together for that specific property. Send both prices and the documents you have; funding can be ready in as little as 24 hours.",
    "localNoteTitle": "Prepare the Naperville transaction file",
    "localNote": "A downtown location can help describe a property, but it cannot establish its resale value. Send the actual contract prices and identify the buyer rather than treating a neighborhood label as underwriting. Each sale needs its own contract and settlement requirements. Ask your closing office and qualified advisers which documents and state-specific rules apply before committing to the structure.",
    "whyHeading": "A review based on the Naperville property",
    "why": [
      "A Naperville transaction needs a review of the specific purchase and resale, not a decision based on the neighborhood alone. Submit the actual property details and identify any questions already raised by your closing office.",
      "Your Naperville funding request should identify the end buyer and any open contract conditions. Include the closing office so the review follows the actual transaction plan.",
      "The published fee schedule is a starting point for estimating the funding charge. Confirm the written terms and both sets of settlement costs before deciding whether the transaction works."
    ],
    "steps": [
      {
        "title": "Submit the property details",
        "text": "Send the Naperville, IL address, both agreed prices and the proposed closing date. Include the signed contracts you have and flag any documents still outstanding."
      },
      {
        "title": "Review both contracts",
        "text": "We review the purchase, resale and funding request with the information you provide. Missing documents or unresolved title conditions may affect whether the file can proceed."
      },
      {
        "title": "Confirm the closing plan",
        "text": "If the file is approved, the closing team confirms funding instructions and settlement requirements. Both transactions must follow the agreed sequence and written terms."
      }
    ],
    "faqs": [
      {
        "q": "What local details matter in Naperville?",
        "a": "Naperville's visitor destinations and Riverwalk give its downtown a distinct identity. A downtown location can help describe a property, but it cannot establish its resale value. Send the actual contract prices and identify the buyer rather than treating a neighborhood label as underwriting."
      },
      {
        "q": "What should I submit for a Naperville review?",
        "a": "Send the exact Naperville, IL property address, both contracts, the end buyer's status and closing office. Identify missing documents and any unresolved conditions."
      },
      {
        "q": "What is a double closing?",
        "a": "A double closing uses two separate sales of the same property. You purchase from the seller and then sell to your end buyer, subject to the contracts and closing requirements for each transaction."
      },
      {
        "q": "What does transactional funding cost?",
        "a": "The published schedule starts at {{tier1Rate}} for funding up to {{tier1Cap}}, with a {{tier1Minimum}} minimum. Additional days, multiple closing companies and special paperwork can add costs, so confirm the written terms for your file."
      },
      {
        "q": "Does submitting a deal guarantee funding?",
        "a": "No. A submission requests a review of your purchase, resale and closing arrangements. Funding depends on the specific file and the applicable terms."
      }
    ],
    "nearby": [
      "chicago"
    ],
    "blurb": "Naperville's visitor destinations and Riverwalk give its downtown a distinct identity."
  },
  {
    "slug": "joliet",
    "name": "Joliet",
    "state": "IL",
    "stateName": "Illinois",
    "county": "Will County",
    "formName": "Chicago-Wholesale-Double-Close-Form",
    "title": "Double Close Funding in Joliet, IL | Chicago Wholesale Double Close",
    "description": "Transactional funding review for a wholesale double closing in Joliet, Illinois. Review the fee schedule and submit the actual purchase and resale details.",
    "h1Bottom": "in Joliet, Illinois",
    "hero": "Joliet maintains a visitor identity built around its own historic and cultural destinations. Describe the exact property instead of treating all Joliet addresses as one market. Attach the documents you have and flag any unresolved seller or occupancy questions. Our transactional funding review brings the purchase, resale and closing arrangements together for that specific property. Send both prices and the documents you have; funding can be ready in as little as 24 hours.",
    "localNoteTitle": "Prepare the Joliet transaction file",
    "localNote": "Describe the exact property instead of treating all Joliet addresses as one market. Attach the documents you have and flag any unresolved seller or occupancy questions. Each sale needs its own contract and settlement requirements. Ask your closing office and qualified advisers which documents and state-specific rules apply before committing to the structure.",
    "whyHeading": "A review based on the Joliet property",
    "why": [
      "A Joliet transaction needs a review of the specific purchase and resale, not a decision based on the neighborhood alone. Submit the actual property details and identify any questions already raised by your closing office.",
      "Your Joliet funding request should identify the end buyer and any open contract conditions. Include the closing office so the review follows the actual transaction plan.",
      "The published fee schedule is a starting point for estimating the funding charge. Confirm the written terms and both sets of settlement costs before deciding whether the transaction works."
    ],
    "steps": [
      {
        "title": "Submit the property details",
        "text": "Send the Joliet, IL address, both agreed prices and the proposed closing date. Include the signed contracts you have and flag any documents still outstanding."
      },
      {
        "title": "Review both contracts",
        "text": "We review the purchase, resale and funding request with the information you provide. Missing documents or unresolved title conditions may affect whether the file can proceed."
      },
      {
        "title": "Confirm the closing plan",
        "text": "If the file is approved, the closing team confirms funding instructions and settlement requirements. Both transactions must follow the agreed sequence and written terms."
      }
    ],
    "faqs": [
      {
        "q": "What local details matter in Joliet?",
        "a": "Joliet maintains a visitor identity built around its own historic and cultural destinations. Describe the exact property instead of treating all Joliet addresses as one market. Attach the documents you have and flag any unresolved seller or occupancy questions."
      },
      {
        "q": "What should I submit for a Joliet review?",
        "a": "Send the exact Joliet, IL property address, both contracts, the end buyer's status and closing office. Identify missing documents and any unresolved conditions."
      },
      {
        "q": "What is a double closing?",
        "a": "A double closing uses two separate sales of the same property. You purchase from the seller and then sell to your end buyer, subject to the contracts and closing requirements for each transaction."
      },
      {
        "q": "What does transactional funding cost?",
        "a": "The published schedule starts at {{tier1Rate}} for funding up to {{tier1Cap}}, with a {{tier1Minimum}} minimum. Additional days, multiple closing companies and special paperwork can add costs, so confirm the written terms for your file."
      },
      {
        "q": "Does submitting a deal guarantee funding?",
        "a": "No. A submission requests a review of your purchase, resale and closing arrangements. Funding depends on the specific file and the applicable terms."
      }
    ],
    "nearby": [
      "chicago"
    ],
    "blurb": "Joliet maintains a visitor identity built around its own historic and cultural destinations."
  },
  {
    "slug": "evanston",
    "name": "Evanston",
    "state": "IL",
    "stateName": "Illinois",
    "county": "Cook County",
    "formName": "Chicago-Wholesale-Double-Close-Form",
    "title": "Double Close Funding in Evanston, IL | Chicago Wholesale Double Close",
    "description": "Transactional funding review for a wholesale double closing in Evanston, Illinois. Review the fee schedule and submit the actual purchase and resale details.",
    "h1Bottom": "in Evanston, Illinois",
    "hero": "Evanston's history is tied to its development as a lakefront community north of Chicago. For a property near the lakefront, use the legal description to identify what is being transferred. Any location premium or renovation plan belongs in the buyer's analysis, not in an assumed funding decision. Our transactional funding review brings the purchase, resale and closing arrangements together for that specific property. Send both prices and the documents you have; funding can be ready in as little as 24 hours.",
    "localNoteTitle": "Prepare the Evanston transaction file",
    "localNote": "For a property near the lakefront, use the legal description to identify what is being transferred. Any location premium or renovation plan belongs in the buyer's analysis, not in an assumed funding decision. Each sale needs its own contract and settlement requirements. Ask your closing office and qualified advisers which documents and state-specific rules apply before committing to the structure.",
    "whyHeading": "A review based on the Evanston property",
    "why": [
      "A Evanston transaction needs a review of the specific purchase and resale, not a decision based on the neighborhood alone. Submit the actual property details and identify any questions already raised by your closing office.",
      "Your Evanston funding request should identify the end buyer and any open contract conditions. Include the closing office so the review follows the actual transaction plan.",
      "The published fee schedule is a starting point for estimating the funding charge. Confirm the written terms and both sets of settlement costs before deciding whether the transaction works."
    ],
    "steps": [
      {
        "title": "Submit the property details",
        "text": "Send the Evanston, IL address, both agreed prices and the proposed closing date. Include the signed contracts you have and flag any documents still outstanding."
      },
      {
        "title": "Review both contracts",
        "text": "We review the purchase, resale and funding request with the information you provide. Missing documents or unresolved title conditions may affect whether the file can proceed."
      },
      {
        "title": "Confirm the closing plan",
        "text": "If the file is approved, the closing team confirms funding instructions and settlement requirements. Both transactions must follow the agreed sequence and written terms."
      }
    ],
    "faqs": [
      {
        "q": "What local details matter in Evanston?",
        "a": "Evanston's history is tied to its development as a lakefront community north of Chicago. For a property near the lakefront, use the legal description to identify what is being transferred. Any location premium or renovation plan belongs in the buyer's analysis, not in an assumed funding decision."
      },
      {
        "q": "What should I submit for a Evanston review?",
        "a": "Send the exact Evanston, IL property address, both contracts, the end buyer's status and closing office. Identify missing documents and any unresolved conditions."
      },
      {
        "q": "What is a double closing?",
        "a": "A double closing uses two separate sales of the same property. You purchase from the seller and then sell to your end buyer, subject to the contracts and closing requirements for each transaction."
      },
      {
        "q": "What does transactional funding cost?",
        "a": "The published schedule starts at {{tier1Rate}} for funding up to {{tier1Cap}}, with a {{tier1Minimum}} minimum. Additional days, multiple closing companies and special paperwork can add costs, so confirm the written terms for your file."
      },
      {
        "q": "Does submitting a deal guarantee funding?",
        "a": "No. A submission requests a review of your purchase, resale and closing arrangements. Funding depends on the specific file and the applicable terms."
      }
    ],
    "nearby": [
      "chicago"
    ],
    "blurb": "Evanston's history is tied to its development as a lakefront community north of Chicago."
  },
  {
    "slug": "elgin",
    "name": "Elgin",
    "state": "IL",
    "stateName": "Illinois",
    "county": "Kane County",
    "formName": "Chicago-Wholesale-Double-Close-Form",
    "title": "Double Close Funding in Elgin, IL | Chicago Wholesale Double Close",
    "description": "Transactional funding review for a wholesale double closing in Elgin, Illinois. Review the fee schedule and submit the actual purchase and resale details.",
    "h1Bottom": "in Elgin, Illinois",
    "hero": "Elgin developed along the Fox River and preserves its own community history. For a property in an older section of Elgin, send the survey and ownership records available. The closing team can identify the actual title questions without relying on the area's age. Our transactional funding review brings the purchase, resale and closing arrangements together for that specific property. Send both prices and the documents you have; funding can be ready in as little as 24 hours.",
    "localNoteTitle": "Prepare the Elgin transaction file",
    "localNote": "For a property in an older section of Elgin, send the survey and ownership records available. The closing team can identify the actual title questions without relying on the area's age. Each sale needs its own contract and settlement requirements. Ask your closing office and qualified advisers which documents and state-specific rules apply before committing to the structure.",
    "whyHeading": "A review based on the Elgin property",
    "why": [
      "A Elgin transaction needs a review of the specific purchase and resale, not a decision based on the neighborhood alone. Submit the actual property details and identify any questions already raised by your closing office.",
      "Your Elgin funding request should identify the end buyer and any open contract conditions. Include the closing office so the review follows the actual transaction plan.",
      "The published fee schedule is a starting point for estimating the funding charge. Confirm the written terms and both sets of settlement costs before deciding whether the transaction works."
    ],
    "steps": [
      {
        "title": "Submit the property details",
        "text": "Send the Elgin, IL address, both agreed prices and the proposed closing date. Include the signed contracts you have and flag any documents still outstanding."
      },
      {
        "title": "Review both contracts",
        "text": "We review the purchase, resale and funding request with the information you provide. Missing documents or unresolved title conditions may affect whether the file can proceed."
      },
      {
        "title": "Confirm the closing plan",
        "text": "If the file is approved, the closing team confirms funding instructions and settlement requirements. Both transactions must follow the agreed sequence and written terms."
      }
    ],
    "faqs": [
      {
        "q": "What local details matter in Elgin?",
        "a": "Elgin developed along the Fox River and preserves its own community history. For a property in an older section of Elgin, send the survey and ownership records available. The closing team can identify the actual title questions without relying on the area's age."
      },
      {
        "q": "What should I submit for a Elgin review?",
        "a": "Send the exact Elgin, IL property address, both contracts, the end buyer's status and closing office. Identify missing documents and any unresolved conditions."
      },
      {
        "q": "What is a double closing?",
        "a": "A double closing uses two separate sales of the same property. You purchase from the seller and then sell to your end buyer, subject to the contracts and closing requirements for each transaction."
      },
      {
        "q": "What does transactional funding cost?",
        "a": "The published schedule starts at {{tier1Rate}} for funding up to {{tier1Cap}}, with a {{tier1Minimum}} minimum. Additional days, multiple closing companies and special paperwork can add costs, so confirm the written terms for your file."
      },
      {
        "q": "Does submitting a deal guarantee funding?",
        "a": "No. A submission requests a review of your purchase, resale and closing arrangements. Funding depends on the specific file and the applicable terms."
      }
    ],
    "nearby": [
      "chicago"
    ],
    "blurb": "Elgin developed along the Fox River and preserves its own community history."
  },
  {
    "slug": "waukegan",
    "name": "Waukegan",
    "state": "IL",
    "stateName": "Illinois",
    "county": "Lake County",
    "formName": "Chicago-Wholesale-Double-Close-Form",
    "title": "Double Close Funding in Waukegan, IL | Chicago Wholesale Double Close",
    "description": "Transactional funding review for a wholesale double closing in Waukegan, Illinois. Review the fee schedule and submit the actual purchase and resale details.",
    "h1Bottom": "in Waukegan, Illinois",
    "hero": "Waukegan developed as a Lake Michigan community with a long local history. A lake-area description does not establish a parcel's conditions or ownership. Explain the actual property and provide any existing survey or seller documents. Our transactional funding review brings the purchase, resale and closing arrangements together for that specific property. Send both prices and the documents you have; funding can be ready in as little as 24 hours.",
    "localNoteTitle": "Prepare the Waukegan transaction file",
    "localNote": "A lake-area description does not establish a parcel's conditions or ownership. Explain the actual property and provide any existing survey or seller documents. Each sale needs its own contract and settlement requirements. Ask your closing office and qualified advisers which documents and state-specific rules apply before committing to the structure.",
    "whyHeading": "A review based on the Waukegan property",
    "why": [
      "A Waukegan transaction needs a review of the specific purchase and resale, not a decision based on the neighborhood alone. Submit the actual property details and identify any questions already raised by your closing office.",
      "Your Waukegan funding request should identify the end buyer and any open contract conditions. Include the closing office so the review follows the actual transaction plan.",
      "The published fee schedule is a starting point for estimating the funding charge. Confirm the written terms and both sets of settlement costs before deciding whether the transaction works."
    ],
    "steps": [
      {
        "title": "Submit the property details",
        "text": "Send the Waukegan, IL address, both agreed prices and the proposed closing date. Include the signed contracts you have and flag any documents still outstanding."
      },
      {
        "title": "Review both contracts",
        "text": "We review the purchase, resale and funding request with the information you provide. Missing documents or unresolved title conditions may affect whether the file can proceed."
      },
      {
        "title": "Confirm the closing plan",
        "text": "If the file is approved, the closing team confirms funding instructions and settlement requirements. Both transactions must follow the agreed sequence and written terms."
      }
    ],
    "faqs": [
      {
        "q": "What local details matter in Waukegan?",
        "a": "Waukegan developed as a Lake Michigan community with a long local history. A lake-area description does not establish a parcel's conditions or ownership. Explain the actual property and provide any existing survey or seller documents."
      },
      {
        "q": "What should I submit for a Waukegan review?",
        "a": "Send the exact Waukegan, IL property address, both contracts, the end buyer's status and closing office. Identify missing documents and any unresolved conditions."
      },
      {
        "q": "What is a double closing?",
        "a": "A double closing uses two separate sales of the same property. You purchase from the seller and then sell to your end buyer, subject to the contracts and closing requirements for each transaction."
      },
      {
        "q": "What does transactional funding cost?",
        "a": "The published schedule starts at {{tier1Rate}} for funding up to {{tier1Cap}}, with a {{tier1Minimum}} minimum. Additional days, multiple closing companies and special paperwork can add costs, so confirm the written terms for your file."
      },
      {
        "q": "Does submitting a deal guarantee funding?",
        "a": "No. A submission requests a review of your purchase, resale and closing arrangements. Funding depends on the specific file and the applicable terms."
      }
    ],
    "nearby": [
      "chicago"
    ],
    "blurb": "Waukegan developed as a Lake Michigan community with a long local history."
  },
  {
    "slug": "schaumburg",
    "name": "Schaumburg",
    "state": "IL",
    "stateName": "Illinois",
    "county": "Cook County",
    "formName": "Chicago-Wholesale-Double-Close-Form",
    "title": "Double Close Funding in Schaumburg, IL | Chicago Wholesale Double Close",
    "description": "Transactional funding review for a wholesale double closing in Schaumburg, Illinois. Review the fee schedule and submit the actual purchase and resale details.",
    "h1Bottom": "in Schaumburg, Illinois",
    "hero": "Schaumburg grew from a rural community into a developed suburban center. Clarify the subdivision and any association information for the parcel. A broad suburban label cannot replace the property documents needed for the two sales. Our transactional funding review brings the purchase, resale and closing arrangements together for that specific property. Send both prices and the documents you have; funding can be ready in as little as 24 hours.",
    "localNoteTitle": "Prepare the Schaumburg transaction file",
    "localNote": "Clarify the subdivision and any association information for the parcel. A broad suburban label cannot replace the property documents needed for the two sales. Each sale needs its own contract and settlement requirements. Ask your closing office and qualified advisers which documents and state-specific rules apply before committing to the structure.",
    "whyHeading": "A review based on the Schaumburg property",
    "why": [
      "A Schaumburg transaction needs a review of the specific purchase and resale, not a decision based on the neighborhood alone. Submit the actual property details and identify any questions already raised by your closing office.",
      "Your Schaumburg funding request should identify the end buyer and any open contract conditions. Include the closing office so the review follows the actual transaction plan.",
      "The published fee schedule is a starting point for estimating the funding charge. Confirm the written terms and both sets of settlement costs before deciding whether the transaction works."
    ],
    "steps": [
      {
        "title": "Submit the property details",
        "text": "Send the Schaumburg, IL address, both agreed prices and the proposed closing date. Include the signed contracts you have and flag any documents still outstanding."
      },
      {
        "title": "Review both contracts",
        "text": "We review the purchase, resale and funding request with the information you provide. Missing documents or unresolved title conditions may affect whether the file can proceed."
      },
      {
        "title": "Confirm the closing plan",
        "text": "If the file is approved, the closing team confirms funding instructions and settlement requirements. Both transactions must follow the agreed sequence and written terms."
      }
    ],
    "faqs": [
      {
        "q": "What local details matter in Schaumburg?",
        "a": "Schaumburg grew from a rural community into a developed suburban center. Clarify the subdivision and any association information for the parcel. A broad suburban label cannot replace the property documents needed for the two sales."
      },
      {
        "q": "What should I submit for a Schaumburg review?",
        "a": "Send the exact Schaumburg, IL property address, both contracts, the end buyer's status and closing office. Identify missing documents and any unresolved conditions."
      },
      {
        "q": "What is a double closing?",
        "a": "A double closing uses two separate sales of the same property. You purchase from the seller and then sell to your end buyer, subject to the contracts and closing requirements for each transaction."
      },
      {
        "q": "What does transactional funding cost?",
        "a": "The published schedule starts at {{tier1Rate}} for funding up to {{tier1Cap}}, with a {{tier1Minimum}} minimum. Additional days, multiple closing companies and special paperwork can add costs, so confirm the written terms for your file."
      },
      {
        "q": "Does submitting a deal guarantee funding?",
        "a": "No. A submission requests a review of your purchase, resale and closing arrangements. Funding depends on the specific file and the applicable terms."
      }
    ],
    "nearby": [
      "chicago"
    ],
    "blurb": "Schaumburg grew from a rural community into a developed suburban center."
  },
  {
    "slug": "oak-park",
    "name": "Oak Park",
    "state": "IL",
    "stateName": "Illinois",
    "county": "Cook County",
    "formName": "Chicago-Wholesale-Double-Close-Form",
    "title": "Double Close Funding in Oak Park, IL | Chicago Wholesale Double Close",
    "description": "Transactional funding review for a wholesale double closing in Oak Park, Illinois. Review the fee schedule and submit the actual purchase and resale details.",
    "h1Bottom": "in Oak Park, Illinois",
    "hero": "Oak Park is known for its architectural history and established residential streets. Identify any restrictions known to affect the actual property. Architectural character alone does not determine title requirements or whether the file qualifies for funding. Our transactional funding review brings the purchase, resale and closing arrangements together for that specific property. Send both prices and the documents you have; funding can be ready in as little as 24 hours.",
    "localNoteTitle": "Prepare the Oak Park transaction file",
    "localNote": "Identify any restrictions known to affect the actual property. Architectural character alone does not determine title requirements or whether the file qualifies for funding. Each sale needs its own contract and settlement requirements. Ask your closing office and qualified advisers which documents and state-specific rules apply before committing to the structure.",
    "whyHeading": "A review based on the Oak Park property",
    "why": [
      "A Oak Park transaction needs a review of the specific purchase and resale, not a decision based on the neighborhood alone. Submit the actual property details and identify any questions already raised by your closing office.",
      "Your Oak Park funding request should identify the end buyer and any open contract conditions. Include the closing office so the review follows the actual transaction plan.",
      "The published fee schedule is a starting point for estimating the funding charge. Confirm the written terms and both sets of settlement costs before deciding whether the transaction works."
    ],
    "steps": [
      {
        "title": "Submit the property details",
        "text": "Send the Oak Park, IL address, both agreed prices and the proposed closing date. Include the signed contracts you have and flag any documents still outstanding."
      },
      {
        "title": "Review both contracts",
        "text": "We review the purchase, resale and funding request with the information you provide. Missing documents or unresolved title conditions may affect whether the file can proceed."
      },
      {
        "title": "Confirm the closing plan",
        "text": "If the file is approved, the closing team confirms funding instructions and settlement requirements. Both transactions must follow the agreed sequence and written terms."
      }
    ],
    "faqs": [
      {
        "q": "What local details matter in Oak Park?",
        "a": "Oak Park is known for its architectural history and established residential streets. Identify any restrictions known to affect the actual property. Architectural character alone does not determine title requirements or whether the file qualifies for funding."
      },
      {
        "q": "What should I submit for a Oak Park review?",
        "a": "Send the exact Oak Park, IL property address, both contracts, the end buyer's status and closing office. Identify missing documents and any unresolved conditions."
      },
      {
        "q": "What is a double closing?",
        "a": "A double closing uses two separate sales of the same property. You purchase from the seller and then sell to your end buyer, subject to the contracts and closing requirements for each transaction."
      },
      {
        "q": "What does transactional funding cost?",
        "a": "The published schedule starts at {{tier1Rate}} for funding up to {{tier1Cap}}, with a {{tier1Minimum}} minimum. Additional days, multiple closing companies and special paperwork can add costs, so confirm the written terms for your file."
      },
      {
        "q": "Does submitting a deal guarantee funding?",
        "a": "No. A submission requests a review of your purchase, resale and closing arrangements. Funding depends on the specific file and the applicable terms."
      }
    ],
    "nearby": [
      "chicago"
    ],
    "blurb": "Oak Park is known for its architectural history and established residential streets."
  },
  {
    "slug": "skokie",
    "name": "Skokie",
    "state": "IL",
    "stateName": "Illinois",
    "county": "Cook County",
    "formName": "Chicago-Wholesale-Double-Close-Form",
    "title": "Double Close Funding in Skokie, IL | Chicago Wholesale Double Close",
    "description": "Transactional funding review for a wholesale double closing in Skokie, Illinois. Review the fee schedule and submit the actual purchase and resale details.",
    "h1Bottom": "in Skokie, Illinois",
    "hero": "Skokie developed from the community once called Niles Center. Use the current address and legal description consistently on both contracts. Historical place names should not introduce ambiguity into the closing file. Our transactional funding review brings the purchase, resale and closing arrangements together for that specific property. Send both prices and the documents you have; funding can be ready in as little as 24 hours.",
    "localNoteTitle": "Prepare the Skokie transaction file",
    "localNote": "Use the current address and legal description consistently on both contracts. Historical place names should not introduce ambiguity into the closing file. Each sale needs its own contract and settlement requirements. Ask your closing office and qualified advisers which documents and state-specific rules apply before committing to the structure.",
    "whyHeading": "A review based on the Skokie property",
    "why": [
      "A Skokie transaction needs a review of the specific purchase and resale, not a decision based on the neighborhood alone. Submit the actual property details and identify any questions already raised by your closing office.",
      "Your Skokie funding request should identify the end buyer and any open contract conditions. Include the closing office so the review follows the actual transaction plan.",
      "The published fee schedule is a starting point for estimating the funding charge. Confirm the written terms and both sets of settlement costs before deciding whether the transaction works."
    ],
    "steps": [
      {
        "title": "Submit the property details",
        "text": "Send the Skokie, IL address, both agreed prices and the proposed closing date. Include the signed contracts you have and flag any documents still outstanding."
      },
      {
        "title": "Review both contracts",
        "text": "We review the purchase, resale and funding request with the information you provide. Missing documents or unresolved title conditions may affect whether the file can proceed."
      },
      {
        "title": "Confirm the closing plan",
        "text": "If the file is approved, the closing team confirms funding instructions and settlement requirements. Both transactions must follow the agreed sequence and written terms."
      }
    ],
    "faqs": [
      {
        "q": "What local details matter in Skokie?",
        "a": "Skokie developed from the community once called Niles Center. Use the current address and legal description consistently on both contracts. Historical place names should not introduce ambiguity into the closing file."
      },
      {
        "q": "What should I submit for a Skokie review?",
        "a": "Send the exact Skokie, IL property address, both contracts, the end buyer's status and closing office. Identify missing documents and any unresolved conditions."
      },
      {
        "q": "What is a double closing?",
        "a": "A double closing uses two separate sales of the same property. You purchase from the seller and then sell to your end buyer, subject to the contracts and closing requirements for each transaction."
      },
      {
        "q": "What does transactional funding cost?",
        "a": "The published schedule starts at {{tier1Rate}} for funding up to {{tier1Cap}}, with a {{tier1Minimum}} minimum. Additional days, multiple closing companies and special paperwork can add costs, so confirm the written terms for your file."
      },
      {
        "q": "Does submitting a deal guarantee funding?",
        "a": "No. A submission requests a review of your purchase, resale and closing arrangements. Funding depends on the specific file and the applicable terms."
      }
    ],
    "nearby": [
      "chicago"
    ],
    "blurb": "Skokie developed from the community once called Niles Center."
  },
  {
    "slug": "berwyn",
    "name": "Berwyn",
    "state": "IL",
    "stateName": "Illinois",
    "county": "Cook County",
    "formName": "Chicago-Wholesale-Double-Close-Form",
    "title": "Double Close Funding in Berwyn, IL | Chicago Wholesale Double Close",
    "description": "Transactional funding review for a wholesale double closing in Berwyn, Illinois. Review the fee schedule and submit the actual purchase and resale details.",
    "h1Bottom": "in Berwyn, Illinois",
    "hero": "Berwyn's development includes a strong local residential and bungalow history. A bungalow layout can guide a renovation discussion, but the funding request needs the parcel and buyer details. Flag any known occupancy or ownership issues separately. Our transactional funding review brings the purchase, resale and closing arrangements together for that specific property. Send both prices and the documents you have; funding can be ready in as little as 24 hours.",
    "localNoteTitle": "Prepare the Berwyn transaction file",
    "localNote": "A bungalow layout can guide a renovation discussion, but the funding request needs the parcel and buyer details. Flag any known occupancy or ownership issues separately. Each sale needs its own contract and settlement requirements. Ask your closing office and qualified advisers which documents and state-specific rules apply before committing to the structure.",
    "whyHeading": "A review based on the Berwyn property",
    "why": [
      "A Berwyn transaction needs a review of the specific purchase and resale, not a decision based on the neighborhood alone. Submit the actual property details and identify any questions already raised by your closing office.",
      "Your Berwyn funding request should identify the end buyer and any open contract conditions. Include the closing office so the review follows the actual transaction plan.",
      "The published fee schedule is a starting point for estimating the funding charge. Confirm the written terms and both sets of settlement costs before deciding whether the transaction works."
    ],
    "steps": [
      {
        "title": "Submit the property details",
        "text": "Send the Berwyn, IL address, both agreed prices and the proposed closing date. Include the signed contracts you have and flag any documents still outstanding."
      },
      {
        "title": "Review both contracts",
        "text": "We review the purchase, resale and funding request with the information you provide. Missing documents or unresolved title conditions may affect whether the file can proceed."
      },
      {
        "title": "Confirm the closing plan",
        "text": "If the file is approved, the closing team confirms funding instructions and settlement requirements. Both transactions must follow the agreed sequence and written terms."
      }
    ],
    "faqs": [
      {
        "q": "What local details matter in Berwyn?",
        "a": "Berwyn's development includes a strong local residential and bungalow history. A bungalow layout can guide a renovation discussion, but the funding request needs the parcel and buyer details. Flag any known occupancy or ownership issues separately."
      },
      {
        "q": "What should I submit for a Berwyn review?",
        "a": "Send the exact Berwyn, IL property address, both contracts, the end buyer's status and closing office. Identify missing documents and any unresolved conditions."
      },
      {
        "q": "What is a double closing?",
        "a": "A double closing uses two separate sales of the same property. You purchase from the seller and then sell to your end buyer, subject to the contracts and closing requirements for each transaction."
      },
      {
        "q": "What does transactional funding cost?",
        "a": "The published schedule starts at {{tier1Rate}} for funding up to {{tier1Cap}}, with a {{tier1Minimum}} minimum. Additional days, multiple closing companies and special paperwork can add costs, so confirm the written terms for your file."
      },
      {
        "q": "Does submitting a deal guarantee funding?",
        "a": "No. A submission requests a review of your purchase, resale and closing arrangements. Funding depends on the specific file and the applicable terms."
      }
    ],
    "nearby": [
      "chicago"
    ],
    "blurb": "Berwyn's development includes a strong local residential and bungalow history."
  },
  {
    "slug": "cicero",
    "name": "Cicero",
    "state": "IL",
    "stateName": "Illinois",
    "county": "Cook County",
    "formName": "Chicago-Wholesale-Double-Close-Form",
    "title": "Double Close Funding in Cicero, IL | Chicago Wholesale Double Close",
    "description": "Transactional funding review for a wholesale double closing in Cicero, Illinois. Review the fee schedule and submit the actual purchase and resale details.",
    "h1Bottom": "in Cicero, Illinois",
    "hero": "Cicero developed as an industrial and residential community west of Chicago. For a multi-unit or occupied property, describe the actual unit and occupancy information. The closing office and your advisers can confirm the documents and responsibilities for that file. Our transactional funding review brings the purchase, resale and closing arrangements together for that specific property. Send both prices and the documents you have; funding can be ready in as little as 24 hours.",
    "localNoteTitle": "Prepare the Cicero transaction file",
    "localNote": "For a multi-unit or occupied property, describe the actual unit and occupancy information. The closing office and your advisers can confirm the documents and responsibilities for that file. Each sale needs its own contract and settlement requirements. Ask your closing office and qualified advisers which documents and state-specific rules apply before committing to the structure.",
    "whyHeading": "A review based on the Cicero property",
    "why": [
      "A Cicero transaction needs a review of the specific purchase and resale, not a decision based on the neighborhood alone. Submit the actual property details and identify any questions already raised by your closing office.",
      "Your Cicero funding request should identify the end buyer and any open contract conditions. Include the closing office so the review follows the actual transaction plan.",
      "The published fee schedule is a starting point for estimating the funding charge. Confirm the written terms and both sets of settlement costs before deciding whether the transaction works."
    ],
    "steps": [
      {
        "title": "Submit the property details",
        "text": "Send the Cicero, IL address, both agreed prices and the proposed closing date. Include the signed contracts you have and flag any documents still outstanding."
      },
      {
        "title": "Review both contracts",
        "text": "We review the purchase, resale and funding request with the information you provide. Missing documents or unresolved title conditions may affect whether the file can proceed."
      },
      {
        "title": "Confirm the closing plan",
        "text": "If the file is approved, the closing team confirms funding instructions and settlement requirements. Both transactions must follow the agreed sequence and written terms."
      }
    ],
    "faqs": [
      {
        "q": "What local details matter in Cicero?",
        "a": "Cicero developed as an industrial and residential community west of Chicago. For a multi-unit or occupied property, describe the actual unit and occupancy information. The closing office and your advisers can confirm the documents and responsibilities for that file."
      },
      {
        "q": "What should I submit for a Cicero review?",
        "a": "Send the exact Cicero, IL property address, both contracts, the end buyer's status and closing office. Identify missing documents and any unresolved conditions."
      },
      {
        "q": "What is a double closing?",
        "a": "A double closing uses two separate sales of the same property. You purchase from the seller and then sell to your end buyer, subject to the contracts and closing requirements for each transaction."
      },
      {
        "q": "What does transactional funding cost?",
        "a": "The published schedule starts at {{tier1Rate}} for funding up to {{tier1Cap}}, with a {{tier1Minimum}} minimum. Additional days, multiple closing companies and special paperwork can add costs, so confirm the written terms for your file."
      },
      {
        "q": "Does submitting a deal guarantee funding?",
        "a": "No. A submission requests a review of your purchase, resale and closing arrangements. Funding depends on the specific file and the applicable terms."
      }
    ],
    "nearby": [
      "chicago"
    ],
    "blurb": "Cicero developed as an industrial and residential community west of Chicago."
  },
  {
    "slug": "des-plaines",
    "name": "Des Plaines",
    "state": "IL",
    "stateName": "Illinois",
    "county": "Cook County",
    "formName": "Chicago-Wholesale-Double-Close-Form",
    "title": "Double Close Funding in Des Plaines, IL | Chicago Wholesale Double Close",
    "description": "Transactional funding review for a wholesale double closing in Des Plaines, Illinois. Review the fee schedule and submit the actual purchase and resale details.",
    "h1Bottom": "in Des Plaines, Illinois",
    "hero": "Des Plaines developed around its river and transportation connections. For a river-area property, share parcel-specific flood or insurance information if available. Do not assume the conditions of one block apply to another. Our transactional funding review brings the purchase, resale and closing arrangements together for that specific property. Send both prices and the documents you have; funding can be ready in as little as 24 hours.",
    "localNoteTitle": "Prepare the Des Plaines transaction file",
    "localNote": "For a river-area property, share parcel-specific flood or insurance information if available. Do not assume the conditions of one block apply to another. Each sale needs its own contract and settlement requirements. Ask your closing office and qualified advisers which documents and state-specific rules apply before committing to the structure.",
    "whyHeading": "A review based on the Des Plaines property",
    "why": [
      "A Des Plaines transaction needs a review of the specific purchase and resale, not a decision based on the neighborhood alone. Submit the actual property details and identify any questions already raised by your closing office.",
      "Your Des Plaines funding request should identify the end buyer and any open contract conditions. Include the closing office so the review follows the actual transaction plan.",
      "The published fee schedule is a starting point for estimating the funding charge. Confirm the written terms and both sets of settlement costs before deciding whether the transaction works."
    ],
    "steps": [
      {
        "title": "Submit the property details",
        "text": "Send the Des Plaines, IL address, both agreed prices and the proposed closing date. Include the signed contracts you have and flag any documents still outstanding."
      },
      {
        "title": "Review both contracts",
        "text": "We review the purchase, resale and funding request with the information you provide. Missing documents or unresolved title conditions may affect whether the file can proceed."
      },
      {
        "title": "Confirm the closing plan",
        "text": "If the file is approved, the closing team confirms funding instructions and settlement requirements. Both transactions must follow the agreed sequence and written terms."
      }
    ],
    "faqs": [
      {
        "q": "What local details matter in Des Plaines?",
        "a": "Des Plaines developed around its river and transportation connections. For a river-area property, share parcel-specific flood or insurance information if available. Do not assume the conditions of one block apply to another."
      },
      {
        "q": "What should I submit for a Des Plaines review?",
        "a": "Send the exact Des Plaines, IL property address, both contracts, the end buyer's status and closing office. Identify missing documents and any unresolved conditions."
      },
      {
        "q": "What is a double closing?",
        "a": "A double closing uses two separate sales of the same property. You purchase from the seller and then sell to your end buyer, subject to the contracts and closing requirements for each transaction."
      },
      {
        "q": "What does transactional funding cost?",
        "a": "The published schedule starts at {{tier1Rate}} for funding up to {{tier1Cap}}, with a {{tier1Minimum}} minimum. Additional days, multiple closing companies and special paperwork can add costs, so confirm the written terms for your file."
      },
      {
        "q": "Does submitting a deal guarantee funding?",
        "a": "No. A submission requests a review of your purchase, resale and closing arrangements. Funding depends on the specific file and the applicable terms."
      }
    ],
    "nearby": [
      "chicago"
    ],
    "blurb": "Des Plaines developed around its river and transportation connections."
  },
  {
    "slug": "orland-park",
    "name": "Orland Park",
    "state": "IL",
    "stateName": "Illinois",
    "county": "Cook County",
    "formName": "Chicago-Wholesale-Double-Close-Form",
    "title": "Double Close Funding in Orland Park, IL | Chicago Wholesale Double Close",
    "description": "Transactional funding review for a wholesale double closing in Orland Park, Illinois. Review the fee schedule and submit the actual purchase and resale details.",
    "h1Bottom": "in Orland Park, Illinois",
    "hero": "Orland Park grew from a railroad-era community into a southwest suburban center. Tell us the actual subdivision and property type rather than relying on the suburb name. Provide any available association documents alongside the purchase and resale contracts. Our transactional funding review brings the purchase, resale and closing arrangements together for that specific property. Send both prices and the documents you have; funding can be ready in as little as 24 hours.",
    "localNoteTitle": "Prepare the Orland Park transaction file",
    "localNote": "Tell us the actual subdivision and property type rather than relying on the suburb name. Provide any available association documents alongside the purchase and resale contracts. Each sale needs its own contract and settlement requirements. Ask your closing office and qualified advisers which documents and state-specific rules apply before committing to the structure.",
    "whyHeading": "A review based on the Orland Park property",
    "why": [
      "A Orland Park transaction needs a review of the specific purchase and resale, not a decision based on the neighborhood alone. Submit the actual property details and identify any questions already raised by your closing office.",
      "Your Orland Park funding request should identify the end buyer and any open contract conditions. Include the closing office so the review follows the actual transaction plan.",
      "The published fee schedule is a starting point for estimating the funding charge. Confirm the written terms and both sets of settlement costs before deciding whether the transaction works."
    ],
    "steps": [
      {
        "title": "Submit the property details",
        "text": "Send the Orland Park, IL address, both agreed prices and the proposed closing date. Include the signed contracts you have and flag any documents still outstanding."
      },
      {
        "title": "Review both contracts",
        "text": "We review the purchase, resale and funding request with the information you provide. Missing documents or unresolved title conditions may affect whether the file can proceed."
      },
      {
        "title": "Confirm the closing plan",
        "text": "If the file is approved, the closing team confirms funding instructions and settlement requirements. Both transactions must follow the agreed sequence and written terms."
      }
    ],
    "faqs": [
      {
        "q": "What local details matter in Orland Park?",
        "a": "Orland Park grew from a railroad-era community into a southwest suburban center. Tell us the actual subdivision and property type rather than relying on the suburb name. Provide any available association documents alongside the purchase and resale contracts."
      },
      {
        "q": "What should I submit for a Orland Park review?",
        "a": "Send the exact Orland Park, IL property address, both contracts, the end buyer's status and closing office. Identify missing documents and any unresolved conditions."
      },
      {
        "q": "What is a double closing?",
        "a": "A double closing uses two separate sales of the same property. You purchase from the seller and then sell to your end buyer, subject to the contracts and closing requirements for each transaction."
      },
      {
        "q": "What does transactional funding cost?",
        "a": "The published schedule starts at {{tier1Rate}} for funding up to {{tier1Cap}}, with a {{tier1Minimum}} minimum. Additional days, multiple closing companies and special paperwork can add costs, so confirm the written terms for your file."
      },
      {
        "q": "Does submitting a deal guarantee funding?",
        "a": "No. A submission requests a review of your purchase, resale and closing arrangements. Funding depends on the specific file and the applicable terms."
      }
    ],
    "nearby": [
      "chicago"
    ],
    "blurb": "Orland Park grew from a railroad-era community into a southwest suburban center."
  },
  {
    "slug": "tinley-park",
    "name": "Tinley Park",
    "state": "IL",
    "stateName": "Illinois",
    "county": "Cook County",
    "formName": "Chicago-Wholesale-Double-Close-Form",
    "title": "Double Close Funding in Tinley Park, IL | Chicago Wholesale Double Close",
    "description": "Transactional funding review for a wholesale double closing in Tinley Park, Illinois. Review the fee schedule and submit the actual purchase and resale details.",
    "h1Bottom": "in Tinley Park, Illinois",
    "hero": "Tinley Park traces its development to the railroad and its original village center. A deal near the village center needs the exact parcel and survey like any other. Identify missing documents before relying on a proposed closing date. Our transactional funding review brings the purchase, resale and closing arrangements together for that specific property. Send both prices and the documents you have; funding can be ready in as little as 24 hours.",
    "localNoteTitle": "Prepare the Tinley Park transaction file",
    "localNote": "A deal near the village center needs the exact parcel and survey like any other. Identify missing documents before relying on a proposed closing date. Each sale needs its own contract and settlement requirements. Ask your closing office and qualified advisers which documents and state-specific rules apply before committing to the structure.",
    "whyHeading": "A review based on the Tinley Park property",
    "why": [
      "A Tinley Park transaction needs a review of the specific purchase and resale, not a decision based on the neighborhood alone. Submit the actual property details and identify any questions already raised by your closing office.",
      "Your Tinley Park funding request should identify the end buyer and any open contract conditions. Include the closing office so the review follows the actual transaction plan.",
      "The published fee schedule is a starting point for estimating the funding charge. Confirm the written terms and both sets of settlement costs before deciding whether the transaction works."
    ],
    "steps": [
      {
        "title": "Submit the property details",
        "text": "Send the Tinley Park, IL address, both agreed prices and the proposed closing date. Include the signed contracts you have and flag any documents still outstanding."
      },
      {
        "title": "Review both contracts",
        "text": "We review the purchase, resale and funding request with the information you provide. Missing documents or unresolved title conditions may affect whether the file can proceed."
      },
      {
        "title": "Confirm the closing plan",
        "text": "If the file is approved, the closing team confirms funding instructions and settlement requirements. Both transactions must follow the agreed sequence and written terms."
      }
    ],
    "faqs": [
      {
        "q": "What local details matter in Tinley Park?",
        "a": "Tinley Park traces its development to the railroad and its original village center. A deal near the village center needs the exact parcel and survey like any other. Identify missing documents before relying on a proposed closing date."
      },
      {
        "q": "What should I submit for a Tinley Park review?",
        "a": "Send the exact Tinley Park, IL property address, both contracts, the end buyer's status and closing office. Identify missing documents and any unresolved conditions."
      },
      {
        "q": "What is a double closing?",
        "a": "A double closing uses two separate sales of the same property. You purchase from the seller and then sell to your end buyer, subject to the contracts and closing requirements for each transaction."
      },
      {
        "q": "What does transactional funding cost?",
        "a": "The published schedule starts at {{tier1Rate}} for funding up to {{tier1Cap}}, with a {{tier1Minimum}} minimum. Additional days, multiple closing companies and special paperwork can add costs, so confirm the written terms for your file."
      },
      {
        "q": "Does submitting a deal guarantee funding?",
        "a": "No. A submission requests a review of your purchase, resale and closing arrangements. Funding depends on the specific file and the applicable terms."
      }
    ],
    "nearby": [
      "chicago"
    ],
    "blurb": "Tinley Park traces its development to the railroad and its original village center."
  },
  {
    "slug": "palatine",
    "name": "Palatine",
    "state": "IL",
    "stateName": "Illinois",
    "county": "Cook County",
    "formName": "Chicago-Wholesale-Double-Close-Form",
    "title": "Double Close Funding in Palatine, IL | Chicago Wholesale Double Close",
    "description": "Transactional funding review for a wholesale double closing in Palatine, Illinois. Review the fee schedule and submit the actual purchase and resale details.",
    "h1Bottom": "in Palatine, Illinois",
    "hero": "Palatine preserves its local history as a northwest suburban community. Identify the subdivision and actual municipality on the contracts. A postal label alone may not answer every property-record question for the closing office. Our transactional funding review brings the purchase, resale and closing arrangements together for that specific property. Send both prices and the documents you have; funding can be ready in as little as 24 hours.",
    "localNoteTitle": "Prepare the Palatine transaction file",
    "localNote": "Identify the subdivision and actual municipality on the contracts. A postal label alone may not answer every property-record question for the closing office. Each sale needs its own contract and settlement requirements. Ask your closing office and qualified advisers which documents and state-specific rules apply before committing to the structure.",
    "whyHeading": "A review based on the Palatine property",
    "why": [
      "A Palatine transaction needs a review of the specific purchase and resale, not a decision based on the neighborhood alone. Submit the actual property details and identify any questions already raised by your closing office.",
      "Your Palatine funding request should identify the end buyer and any open contract conditions. Include the closing office so the review follows the actual transaction plan.",
      "The published fee schedule is a starting point for estimating the funding charge. Confirm the written terms and both sets of settlement costs before deciding whether the transaction works."
    ],
    "steps": [
      {
        "title": "Submit the property details",
        "text": "Send the Palatine, IL address, both agreed prices and the proposed closing date. Include the signed contracts you have and flag any documents still outstanding."
      },
      {
        "title": "Review both contracts",
        "text": "We review the purchase, resale and funding request with the information you provide. Missing documents or unresolved title conditions may affect whether the file can proceed."
      },
      {
        "title": "Confirm the closing plan",
        "text": "If the file is approved, the closing team confirms funding instructions and settlement requirements. Both transactions must follow the agreed sequence and written terms."
      }
    ],
    "faqs": [
      {
        "q": "What local details matter in Palatine?",
        "a": "Palatine preserves its local history as a northwest suburban community. Identify the subdivision and actual municipality on the contracts. A postal label alone may not answer every property-record question for the closing office."
      },
      {
        "q": "What should I submit for a Palatine review?",
        "a": "Send the exact Palatine, IL property address, both contracts, the end buyer's status and closing office. Identify missing documents and any unresolved conditions."
      },
      {
        "q": "What is a double closing?",
        "a": "A double closing uses two separate sales of the same property. You purchase from the seller and then sell to your end buyer, subject to the contracts and closing requirements for each transaction."
      },
      {
        "q": "What does transactional funding cost?",
        "a": "The published schedule starts at {{tier1Rate}} for funding up to {{tier1Cap}}, with a {{tier1Minimum}} minimum. Additional days, multiple closing companies and special paperwork can add costs, so confirm the written terms for your file."
      },
      {
        "q": "Does submitting a deal guarantee funding?",
        "a": "No. A submission requests a review of your purchase, resale and closing arrangements. Funding depends on the specific file and the applicable terms."
      }
    ],
    "nearby": [
      "chicago"
    ],
    "blurb": "Palatine preserves its local history as a northwest suburban community."
  },
  {
    "slug": "hoffman-estates",
    "name": "Hoffman Estates",
    "state": "IL",
    "stateName": "Illinois",
    "county": "Cook County",
    "formName": "Chicago-Wholesale-Double-Close-Form",
    "title": "Double Close Funding in Hoffman Estates, IL | Chicago Wholesale Double Close",
    "description": "Transactional funding review for a wholesale double closing in Hoffman Estates, Illinois. Review the fee schedule and submit the actual purchase and resale details.",
    "h1Bottom": "in Hoffman Estates, Illinois",
    "hero": "Hoffman Estates grew through planned suburban development. Share any recorded restrictions or association materials already supplied for the home. Planned development history does not prove the terms that apply to a specific lot. Our transactional funding review brings the purchase, resale and closing arrangements together for that specific property. Send both prices and the documents you have; funding can be ready in as little as 24 hours.",
    "localNoteTitle": "Prepare the Hoffman Estates transaction file",
    "localNote": "Share any recorded restrictions or association materials already supplied for the home. Planned development history does not prove the terms that apply to a specific lot. Each sale needs its own contract and settlement requirements. Ask your closing office and qualified advisers which documents and state-specific rules apply before committing to the structure.",
    "whyHeading": "A review based on the Hoffman Estates property",
    "why": [
      "A Hoffman Estates transaction needs a review of the specific purchase and resale, not a decision based on the neighborhood alone. Submit the actual property details and identify any questions already raised by your closing office.",
      "Your Hoffman Estates funding request should identify the end buyer and any open contract conditions. Include the closing office so the review follows the actual transaction plan.",
      "The published fee schedule is a starting point for estimating the funding charge. Confirm the written terms and both sets of settlement costs before deciding whether the transaction works."
    ],
    "steps": [
      {
        "title": "Submit the property details",
        "text": "Send the Hoffman Estates, IL address, both agreed prices and the proposed closing date. Include the signed contracts you have and flag any documents still outstanding."
      },
      {
        "title": "Review both contracts",
        "text": "We review the purchase, resale and funding request with the information you provide. Missing documents or unresolved title conditions may affect whether the file can proceed."
      },
      {
        "title": "Confirm the closing plan",
        "text": "If the file is approved, the closing team confirms funding instructions and settlement requirements. Both transactions must follow the agreed sequence and written terms."
      }
    ],
    "faqs": [
      {
        "q": "What local details matter in Hoffman Estates?",
        "a": "Hoffman Estates grew through planned suburban development. Share any recorded restrictions or association materials already supplied for the home. Planned development history does not prove the terms that apply to a specific lot."
      },
      {
        "q": "What should I submit for a Hoffman Estates review?",
        "a": "Send the exact Hoffman Estates, IL property address, both contracts, the end buyer's status and closing office. Identify missing documents and any unresolved conditions."
      },
      {
        "q": "What is a double closing?",
        "a": "A double closing uses two separate sales of the same property. You purchase from the seller and then sell to your end buyer, subject to the contracts and closing requirements for each transaction."
      },
      {
        "q": "What does transactional funding cost?",
        "a": "The published schedule starts at {{tier1Rate}} for funding up to {{tier1Cap}}, with a {{tier1Minimum}} minimum. Additional days, multiple closing companies and special paperwork can add costs, so confirm the written terms for your file."
      },
      {
        "q": "Does submitting a deal guarantee funding?",
        "a": "No. A submission requests a review of your purchase, resale and closing arrangements. Funding depends on the specific file and the applicable terms."
      }
    ],
    "nearby": [
      "chicago"
    ],
    "blurb": "Hoffman Estates grew through planned suburban development."
  },
  {
    "slug": "glenview",
    "name": "Glenview",
    "state": "IL",
    "stateName": "Illinois",
    "county": "Cook County",
    "formName": "Chicago-Wholesale-Double-Close-Form",
    "title": "Double Close Funding in Glenview, IL | Chicago Wholesale Double Close",
    "description": "Transactional funding review for a wholesale double closing in Glenview, Illinois. Review the fee schedule and submit the actual purchase and resale details.",
    "h1Bottom": "in Glenview, Illinois",
    "hero": "Glenview's history includes the former naval air station and the development of The Glen. Specify whether the property is in The Glen or elsewhere in the village. Include parcel and association documents so the review does not assume all Glenview properties share one structure. Our transactional funding review brings the purchase, resale and closing arrangements together for that specific property. Send both prices and the documents you have; funding can be ready in as little as 24 hours.",
    "localNoteTitle": "Prepare the Glenview transaction file",
    "localNote": "Specify whether the property is in The Glen or elsewhere in the village. Include parcel and association documents so the review does not assume all Glenview properties share one structure. Each sale needs its own contract and settlement requirements. Ask your closing office and qualified advisers which documents and state-specific rules apply before committing to the structure.",
    "whyHeading": "A review based on the Glenview property",
    "why": [
      "A Glenview transaction needs a review of the specific purchase and resale, not a decision based on the neighborhood alone. Submit the actual property details and identify any questions already raised by your closing office.",
      "Your Glenview funding request should identify the end buyer and any open contract conditions. Include the closing office so the review follows the actual transaction plan.",
      "The published fee schedule is a starting point for estimating the funding charge. Confirm the written terms and both sets of settlement costs before deciding whether the transaction works."
    ],
    "steps": [
      {
        "title": "Submit the property details",
        "text": "Send the Glenview, IL address, both agreed prices and the proposed closing date. Include the signed contracts you have and flag any documents still outstanding."
      },
      {
        "title": "Review both contracts",
        "text": "We review the purchase, resale and funding request with the information you provide. Missing documents or unresolved title conditions may affect whether the file can proceed."
      },
      {
        "title": "Confirm the closing plan",
        "text": "If the file is approved, the closing team confirms funding instructions and settlement requirements. Both transactions must follow the agreed sequence and written terms."
      }
    ],
    "faqs": [
      {
        "q": "What local details matter in Glenview?",
        "a": "Glenview's history includes the former naval air station and the development of The Glen. Specify whether the property is in The Glen or elsewhere in the village. Include parcel and association documents so the review does not assume all Glenview properties share one structure."
      },
      {
        "q": "What should I submit for a Glenview review?",
        "a": "Send the exact Glenview, IL property address, both contracts, the end buyer's status and closing office. Identify missing documents and any unresolved conditions."
      },
      {
        "q": "What is a double closing?",
        "a": "A double closing uses two separate sales of the same property. You purchase from the seller and then sell to your end buyer, subject to the contracts and closing requirements for each transaction."
      },
      {
        "q": "What does transactional funding cost?",
        "a": "The published schedule starts at {{tier1Rate}} for funding up to {{tier1Cap}}, with a {{tier1Minimum}} minimum. Additional days, multiple closing companies and special paperwork can add costs, so confirm the written terms for your file."
      },
      {
        "q": "Does submitting a deal guarantee funding?",
        "a": "No. A submission requests a review of your purchase, resale and closing arrangements. Funding depends on the specific file and the applicable terms."
      }
    ],
    "nearby": [
      "chicago"
    ],
    "blurb": "Glenview's history includes the former naval air station and the development of The Glen."
  },
  {
    "slug": "northbrook",
    "name": "Northbrook",
    "state": "IL",
    "stateName": "Illinois",
    "county": "Cook County",
    "formName": "Chicago-Wholesale-Double-Close-Form",
    "title": "Double Close Funding in Northbrook, IL | Chicago Wholesale Double Close",
    "description": "Transactional funding review for a wholesale double closing in Northbrook, Illinois. Review the fee schedule and submit the actual purchase and resale details.",
    "h1Bottom": "in Northbrook, Illinois",
    "hero": "Northbrook developed from the community formerly called Shermerville. Keep the present property identification consistent between purchase and resale documents. Explain any subdivision restrictions known to you rather than treating them as uniform across the village. Our transactional funding review brings the purchase, resale and closing arrangements together for that specific property. Send both prices and the documents you have; funding can be ready in as little as 24 hours.",
    "localNoteTitle": "Prepare the Northbrook transaction file",
    "localNote": "Keep the present property identification consistent between purchase and resale documents. Explain any subdivision restrictions known to you rather than treating them as uniform across the village. Each sale needs its own contract and settlement requirements. Ask your closing office and qualified advisers which documents and state-specific rules apply before committing to the structure.",
    "whyHeading": "A review based on the Northbrook property",
    "why": [
      "A Northbrook transaction needs a review of the specific purchase and resale, not a decision based on the neighborhood alone. Submit the actual property details and identify any questions already raised by your closing office.",
      "Your Northbrook funding request should identify the end buyer and any open contract conditions. Include the closing office so the review follows the actual transaction plan.",
      "The published fee schedule is a starting point for estimating the funding charge. Confirm the written terms and both sets of settlement costs before deciding whether the transaction works."
    ],
    "steps": [
      {
        "title": "Submit the property details",
        "text": "Send the Northbrook, IL address, both agreed prices and the proposed closing date. Include the signed contracts you have and flag any documents still outstanding."
      },
      {
        "title": "Review both contracts",
        "text": "We review the purchase, resale and funding request with the information you provide. Missing documents or unresolved title conditions may affect whether the file can proceed."
      },
      {
        "title": "Confirm the closing plan",
        "text": "If the file is approved, the closing team confirms funding instructions and settlement requirements. Both transactions must follow the agreed sequence and written terms."
      }
    ],
    "faqs": [
      {
        "q": "What local details matter in Northbrook?",
        "a": "Northbrook developed from the community formerly called Shermerville. Keep the present property identification consistent between purchase and resale documents. Explain any subdivision restrictions known to you rather than treating them as uniform across the village."
      },
      {
        "q": "What should I submit for a Northbrook review?",
        "a": "Send the exact Northbrook, IL property address, both contracts, the end buyer's status and closing office. Identify missing documents and any unresolved conditions."
      },
      {
        "q": "What is a double closing?",
        "a": "A double closing uses two separate sales of the same property. You purchase from the seller and then sell to your end buyer, subject to the contracts and closing requirements for each transaction."
      },
      {
        "q": "What does transactional funding cost?",
        "a": "The published schedule starts at {{tier1Rate}} for funding up to {{tier1Cap}}, with a {{tier1Minimum}} minimum. Additional days, multiple closing companies and special paperwork can add costs, so confirm the written terms for your file."
      },
      {
        "q": "Does submitting a deal guarantee funding?",
        "a": "No. A submission requests a review of your purchase, resale and closing arrangements. Funding depends on the specific file and the applicable terms."
      }
    ],
    "nearby": [
      "chicago"
    ],
    "blurb": "Northbrook developed from the community formerly called Shermerville."
  },
  {
    "slug": "wheaton",
    "name": "Wheaton",
    "state": "IL",
    "stateName": "Illinois",
    "county": "DuPage County",
    "formName": "Chicago-Wholesale-Double-Close-Form",
    "title": "Double Close Funding in Wheaton, IL | Chicago Wholesale Double Close",
    "description": "Transactional funding review for a wholesale double closing in Wheaton, Illinois. Review the fee schedule and submit the actual purchase and resale details.",
    "h1Bottom": "in Wheaton, Illinois",
    "hero": "Wheaton developed around its railroad connection and county-seat role. An older downtown setting does not settle the ownership or title questions for the home. Supply the survey and available seller documents so the file can be reviewed on its own. Our transactional funding review brings the purchase, resale and closing arrangements together for that specific property. Send both prices and the documents you have; funding can be ready in as little as 24 hours.",
    "localNoteTitle": "Prepare the Wheaton transaction file",
    "localNote": "An older downtown setting does not settle the ownership or title questions for the home. Supply the survey and available seller documents so the file can be reviewed on its own. Each sale needs its own contract and settlement requirements. Ask your closing office and qualified advisers which documents and state-specific rules apply before committing to the structure.",
    "whyHeading": "A review based on the Wheaton property",
    "why": [
      "A Wheaton transaction needs a review of the specific purchase and resale, not a decision based on the neighborhood alone. Submit the actual property details and identify any questions already raised by your closing office.",
      "Your Wheaton funding request should identify the end buyer and any open contract conditions. Include the closing office so the review follows the actual transaction plan.",
      "The published fee schedule is a starting point for estimating the funding charge. Confirm the written terms and both sets of settlement costs before deciding whether the transaction works."
    ],
    "steps": [
      {
        "title": "Submit the property details",
        "text": "Send the Wheaton, IL address, both agreed prices and the proposed closing date. Include the signed contracts you have and flag any documents still outstanding."
      },
      {
        "title": "Review both contracts",
        "text": "We review the purchase, resale and funding request with the information you provide. Missing documents or unresolved title conditions may affect whether the file can proceed."
      },
      {
        "title": "Confirm the closing plan",
        "text": "If the file is approved, the closing team confirms funding instructions and settlement requirements. Both transactions must follow the agreed sequence and written terms."
      }
    ],
    "faqs": [
      {
        "q": "What local details matter in Wheaton?",
        "a": "Wheaton developed around its railroad connection and county-seat role. An older downtown setting does not settle the ownership or title questions for the home. Supply the survey and available seller documents so the file can be reviewed on its own."
      },
      {
        "q": "What should I submit for a Wheaton review?",
        "a": "Send the exact Wheaton, IL property address, both contracts, the end buyer's status and closing office. Identify missing documents and any unresolved conditions."
      },
      {
        "q": "What is a double closing?",
        "a": "A double closing uses two separate sales of the same property. You purchase from the seller and then sell to your end buyer, subject to the contracts and closing requirements for each transaction."
      },
      {
        "q": "What does transactional funding cost?",
        "a": "The published schedule starts at {{tier1Rate}} for funding up to {{tier1Cap}}, with a {{tier1Minimum}} minimum. Additional days, multiple closing companies and special paperwork can add costs, so confirm the written terms for your file."
      },
      {
        "q": "Does submitting a deal guarantee funding?",
        "a": "No. A submission requests a review of your purchase, resale and closing arrangements. Funding depends on the specific file and the applicable terms."
      }
    ],
    "nearby": [
      "chicago"
    ],
    "blurb": "Wheaton developed around its railroad connection and county-seat role."
  },
  {
    "slug": "elmhurst",
    "name": "Elmhurst",
    "state": "IL",
    "stateName": "Illinois",
    "county": "DuPage County",
    "formName": "Chicago-Wholesale-Double-Close-Form",
    "title": "Double Close Funding in Elmhurst, IL | Chicago Wholesale Double Close",
    "description": "Transactional funding review for a wholesale double closing in Elmhurst, Illinois. Review the fee schedule and submit the actual purchase and resale details.",
    "h1Bottom": "in Elmhurst, Illinois",
    "hero": "Elmhurst's history reflects its growth as a railroad suburb west of Chicago. Identify the exact parcel and any documents already available for it. Renovation assumptions and resale plans should be kept distinct from the closing office's title review. Our transactional funding review brings the purchase, resale and closing arrangements together for that specific property. Send both prices and the documents you have; funding can be ready in as little as 24 hours.",
    "localNoteTitle": "Prepare the Elmhurst transaction file",
    "localNote": "Identify the exact parcel and any documents already available for it. Renovation assumptions and resale plans should be kept distinct from the closing office's title review. Each sale needs its own contract and settlement requirements. Ask your closing office and qualified advisers which documents and state-specific rules apply before committing to the structure.",
    "whyHeading": "A review based on the Elmhurst property",
    "why": [
      "A Elmhurst transaction needs a review of the specific purchase and resale, not a decision based on the neighborhood alone. Submit the actual property details and identify any questions already raised by your closing office.",
      "Your Elmhurst funding request should identify the end buyer and any open contract conditions. Include the closing office so the review follows the actual transaction plan.",
      "The published fee schedule is a starting point for estimating the funding charge. Confirm the written terms and both sets of settlement costs before deciding whether the transaction works."
    ],
    "steps": [
      {
        "title": "Submit the property details",
        "text": "Send the Elmhurst, IL address, both agreed prices and the proposed closing date. Include the signed contracts you have and flag any documents still outstanding."
      },
      {
        "title": "Review both contracts",
        "text": "We review the purchase, resale and funding request with the information you provide. Missing documents or unresolved title conditions may affect whether the file can proceed."
      },
      {
        "title": "Confirm the closing plan",
        "text": "If the file is approved, the closing team confirms funding instructions and settlement requirements. Both transactions must follow the agreed sequence and written terms."
      }
    ],
    "faqs": [
      {
        "q": "What local details matter in Elmhurst?",
        "a": "Elmhurst's history reflects its growth as a railroad suburb west of Chicago. Identify the exact parcel and any documents already available for it. Renovation assumptions and resale plans should be kept distinct from the closing office's title review."
      },
      {
        "q": "What should I submit for a Elmhurst review?",
        "a": "Send the exact Elmhurst, IL property address, both contracts, the end buyer's status and closing office. Identify missing documents and any unresolved conditions."
      },
      {
        "q": "What is a double closing?",
        "a": "A double closing uses two separate sales of the same property. You purchase from the seller and then sell to your end buyer, subject to the contracts and closing requirements for each transaction."
      },
      {
        "q": "What does transactional funding cost?",
        "a": "The published schedule starts at {{tier1Rate}} for funding up to {{tier1Cap}}, with a {{tier1Minimum}} minimum. Additional days, multiple closing companies and special paperwork can add costs, so confirm the written terms for your file."
      },
      {
        "q": "Does submitting a deal guarantee funding?",
        "a": "No. A submission requests a review of your purchase, resale and closing arrangements. Funding depends on the specific file and the applicable terms."
      }
    ],
    "nearby": [
      "chicago"
    ],
    "blurb": "Elmhurst's history reflects its growth as a railroad suburb west of Chicago."
  },
  {
    "slug": "downers-grove",
    "name": "Downers Grove",
    "state": "IL",
    "stateName": "Illinois",
    "county": "DuPage County",
    "formName": "Chicago-Wholesale-Double-Close-Form",
    "title": "Double Close Funding in Downers Grove, IL | Chicago Wholesale Double Close",
    "description": "Transactional funding review for a wholesale double closing in Downers Grove, Illinois. Review the fee schedule and submit the actual purchase and resale details.",
    "h1Bottom": "in Downers Grove, Illinois",
    "hero": "Downers Grove grew from an early settlement into a railroad-connected suburb. Use the actual property records to establish the lot and ownership. A broad historic description is context, not a substitute for the two transaction files. Our transactional funding review brings the purchase, resale and closing arrangements together for that specific property. Send both prices and the documents you have; funding can be ready in as little as 24 hours.",
    "localNoteTitle": "Prepare the Downers Grove transaction file",
    "localNote": "Use the actual property records to establish the lot and ownership. A broad historic description is context, not a substitute for the two transaction files. Each sale needs its own contract and settlement requirements. Ask your closing office and qualified advisers which documents and state-specific rules apply before committing to the structure.",
    "whyHeading": "A review based on the Downers Grove property",
    "why": [
      "A Downers Grove transaction needs a review of the specific purchase and resale, not a decision based on the neighborhood alone. Submit the actual property details and identify any questions already raised by your closing office.",
      "Your Downers Grove funding request should identify the end buyer and any open contract conditions. Include the closing office so the review follows the actual transaction plan.",
      "The published fee schedule is a starting point for estimating the funding charge. Confirm the written terms and both sets of settlement costs before deciding whether the transaction works."
    ],
    "steps": [
      {
        "title": "Submit the property details",
        "text": "Send the Downers Grove, IL address, both agreed prices and the proposed closing date. Include the signed contracts you have and flag any documents still outstanding."
      },
      {
        "title": "Review both contracts",
        "text": "We review the purchase, resale and funding request with the information you provide. Missing documents or unresolved title conditions may affect whether the file can proceed."
      },
      {
        "title": "Confirm the closing plan",
        "text": "If the file is approved, the closing team confirms funding instructions and settlement requirements. Both transactions must follow the agreed sequence and written terms."
      }
    ],
    "faqs": [
      {
        "q": "What local details matter in Downers Grove?",
        "a": "Downers Grove grew from an early settlement into a railroad-connected suburb. Use the actual property records to establish the lot and ownership. A broad historic description is context, not a substitute for the two transaction files."
      },
      {
        "q": "What should I submit for a Downers Grove review?",
        "a": "Send the exact Downers Grove, IL property address, both contracts, the end buyer's status and closing office. Identify missing documents and any unresolved conditions."
      },
      {
        "q": "What is a double closing?",
        "a": "A double closing uses two separate sales of the same property. You purchase from the seller and then sell to your end buyer, subject to the contracts and closing requirements for each transaction."
      },
      {
        "q": "What does transactional funding cost?",
        "a": "The published schedule starts at {{tier1Rate}} for funding up to {{tier1Cap}}, with a {{tier1Minimum}} minimum. Additional days, multiple closing companies and special paperwork can add costs, so confirm the written terms for your file."
      },
      {
        "q": "Does submitting a deal guarantee funding?",
        "a": "No. A submission requests a review of your purchase, resale and closing arrangements. Funding depends on the specific file and the applicable terms."
      }
    ],
    "nearby": [
      "chicago"
    ],
    "blurb": "Downers Grove grew from an early settlement into a railroad-connected suburb."
  },
  {
    "slug": "bartlett",
    "name": "Bartlett",
    "state": "IL",
    "stateName": "Illinois",
    "county": "DuPage County",
    "formName": "Chicago-Wholesale-Double-Close-Form",
    "title": "Double Close Funding in Bartlett, IL | Chicago Wholesale Double Close",
    "description": "Transactional funding review for a wholesale double closing in Bartlett, Illinois. Review the fee schedule and submit the actual purchase and resale details.",
    "h1Bottom": "in Bartlett, Illinois",
    "hero": "Bartlett preserves its history as a railroad community. State the municipality and subdivision along with the street address. The closing team can identify the recording and settlement requirements for the actual parcel. Our transactional funding review brings the purchase, resale and closing arrangements together for that specific property. Send both prices and the documents you have; funding can be ready in as little as 24 hours.",
    "localNoteTitle": "Prepare the Bartlett transaction file",
    "localNote": "State the municipality and subdivision along with the street address. The closing team can identify the recording and settlement requirements for the actual parcel. Each sale needs its own contract and settlement requirements. Ask your closing office and qualified advisers which documents and state-specific rules apply before committing to the structure.",
    "whyHeading": "A review based on the Bartlett property",
    "why": [
      "A Bartlett transaction needs a review of the specific purchase and resale, not a decision based on the neighborhood alone. Submit the actual property details and identify any questions already raised by your closing office.",
      "Your Bartlett funding request should identify the end buyer and any open contract conditions. Include the closing office so the review follows the actual transaction plan.",
      "The published fee schedule is a starting point for estimating the funding charge. Confirm the written terms and both sets of settlement costs before deciding whether the transaction works."
    ],
    "steps": [
      {
        "title": "Submit the property details",
        "text": "Send the Bartlett, IL address, both agreed prices and the proposed closing date. Include the signed contracts you have and flag any documents still outstanding."
      },
      {
        "title": "Review both contracts",
        "text": "We review the purchase, resale and funding request with the information you provide. Missing documents or unresolved title conditions may affect whether the file can proceed."
      },
      {
        "title": "Confirm the closing plan",
        "text": "If the file is approved, the closing team confirms funding instructions and settlement requirements. Both transactions must follow the agreed sequence and written terms."
      }
    ],
    "faqs": [
      {
        "q": "What local details matter in Bartlett?",
        "a": "Bartlett preserves its history as a railroad community. State the municipality and subdivision along with the street address. The closing team can identify the recording and settlement requirements for the actual parcel."
      },
      {
        "q": "What should I submit for a Bartlett review?",
        "a": "Send the exact Bartlett, IL property address, both contracts, the end buyer's status and closing office. Identify missing documents and any unresolved conditions."
      },
      {
        "q": "What is a double closing?",
        "a": "A double closing uses two separate sales of the same property. You purchase from the seller and then sell to your end buyer, subject to the contracts and closing requirements for each transaction."
      },
      {
        "q": "What does transactional funding cost?",
        "a": "The published schedule starts at {{tier1Rate}} for funding up to {{tier1Cap}}, with a {{tier1Minimum}} minimum. Additional days, multiple closing companies and special paperwork can add costs, so confirm the written terms for your file."
      },
      {
        "q": "Does submitting a deal guarantee funding?",
        "a": "No. A submission requests a review of your purchase, resale and closing arrangements. Funding depends on the specific file and the applicable terms."
      }
    ],
    "nearby": [
      "chicago"
    ],
    "blurb": "Bartlett preserves its history as a railroad community."
  },
  {
    "slug": "hanover-park",
    "name": "Hanover Park",
    "state": "IL",
    "stateName": "Illinois",
    "county": "Cook County",
    "formName": "Chicago-Wholesale-Double-Close-Form",
    "title": "Double Close Funding in Hanover Park, IL | Chicago Wholesale Double Close",
    "description": "Transactional funding review for a wholesale double closing in Hanover Park, Illinois. Review the fee schedule and submit the actual purchase and resale details.",
    "h1Bottom": "in Hanover Park, Illinois",
    "hero": "Hanover Park developed as a postwar suburban community. For a subdivision property, include any available association materials. The age of a community cannot establish a specific home's condition or contract requirements. Our transactional funding review brings the purchase, resale and closing arrangements together for that specific property. Send both prices and the documents you have; funding can be ready in as little as 24 hours.",
    "localNoteTitle": "Prepare the Hanover Park transaction file",
    "localNote": "For a subdivision property, include any available association materials. The age of a community cannot establish a specific home's condition or contract requirements. Each sale needs its own contract and settlement requirements. Ask your closing office and qualified advisers which documents and state-specific rules apply before committing to the structure.",
    "whyHeading": "A review based on the Hanover Park property",
    "why": [
      "A Hanover Park transaction needs a review of the specific purchase and resale, not a decision based on the neighborhood alone. Submit the actual property details and identify any questions already raised by your closing office.",
      "Your Hanover Park funding request should identify the end buyer and any open contract conditions. Include the closing office so the review follows the actual transaction plan.",
      "The published fee schedule is a starting point for estimating the funding charge. Confirm the written terms and both sets of settlement costs before deciding whether the transaction works."
    ],
    "steps": [
      {
        "title": "Submit the property details",
        "text": "Send the Hanover Park, IL address, both agreed prices and the proposed closing date. Include the signed contracts you have and flag any documents still outstanding."
      },
      {
        "title": "Review both contracts",
        "text": "We review the purchase, resale and funding request with the information you provide. Missing documents or unresolved title conditions may affect whether the file can proceed."
      },
      {
        "title": "Confirm the closing plan",
        "text": "If the file is approved, the closing team confirms funding instructions and settlement requirements. Both transactions must follow the agreed sequence and written terms."
      }
    ],
    "faqs": [
      {
        "q": "What local details matter in Hanover Park?",
        "a": "Hanover Park developed as a postwar suburban community. For a subdivision property, include any available association materials. The age of a community cannot establish a specific home's condition or contract requirements."
      },
      {
        "q": "What should I submit for a Hanover Park review?",
        "a": "Send the exact Hanover Park, IL property address, both contracts, the end buyer's status and closing office. Identify missing documents and any unresolved conditions."
      },
      {
        "q": "What is a double closing?",
        "a": "A double closing uses two separate sales of the same property. You purchase from the seller and then sell to your end buyer, subject to the contracts and closing requirements for each transaction."
      },
      {
        "q": "What does transactional funding cost?",
        "a": "The published schedule starts at {{tier1Rate}} for funding up to {{tier1Cap}}, with a {{tier1Minimum}} minimum. Additional days, multiple closing companies and special paperwork can add costs, so confirm the written terms for your file."
      },
      {
        "q": "Does submitting a deal guarantee funding?",
        "a": "No. A submission requests a review of your purchase, resale and closing arrangements. Funding depends on the specific file and the applicable terms."
      }
    ],
    "nearby": [
      "chicago"
    ],
    "blurb": "Hanover Park developed as a postwar suburban community."
  },
  {
    "slug": "streamwood",
    "name": "Streamwood",
    "state": "IL",
    "stateName": "Illinois",
    "county": "Cook County",
    "formName": "Chicago-Wholesale-Double-Close-Form",
    "title": "Double Close Funding in Streamwood, IL | Chicago Wholesale Double Close",
    "description": "Transactional funding review for a wholesale double closing in Streamwood, Illinois. Review the fee schedule and submit the actual purchase and resale details.",
    "h1Bottom": "in Streamwood, Illinois",
    "hero": "Streamwood grew through postwar suburban development. Describe the actual property type and whether it is occupied. Keep the buyer's repair plan separate from the ownership and contract information needed for closing. Our transactional funding review brings the purchase, resale and closing arrangements together for that specific property. Send both prices and the documents you have; funding can be ready in as little as 24 hours.",
    "localNoteTitle": "Prepare the Streamwood transaction file",
    "localNote": "Describe the actual property type and whether it is occupied. Keep the buyer's repair plan separate from the ownership and contract information needed for closing. Each sale needs its own contract and settlement requirements. Ask your closing office and qualified advisers which documents and state-specific rules apply before committing to the structure.",
    "whyHeading": "A review based on the Streamwood property",
    "why": [
      "A Streamwood transaction needs a review of the specific purchase and resale, not a decision based on the neighborhood alone. Submit the actual property details and identify any questions already raised by your closing office.",
      "Your Streamwood funding request should identify the end buyer and any open contract conditions. Include the closing office so the review follows the actual transaction plan.",
      "The published fee schedule is a starting point for estimating the funding charge. Confirm the written terms and both sets of settlement costs before deciding whether the transaction works."
    ],
    "steps": [
      {
        "title": "Submit the property details",
        "text": "Send the Streamwood, IL address, both agreed prices and the proposed closing date. Include the signed contracts you have and flag any documents still outstanding."
      },
      {
        "title": "Review both contracts",
        "text": "We review the purchase, resale and funding request with the information you provide. Missing documents or unresolved title conditions may affect whether the file can proceed."
      },
      {
        "title": "Confirm the closing plan",
        "text": "If the file is approved, the closing team confirms funding instructions and settlement requirements. Both transactions must follow the agreed sequence and written terms."
      }
    ],
    "faqs": [
      {
        "q": "What local details matter in Streamwood?",
        "a": "Streamwood grew through postwar suburban development. Describe the actual property type and whether it is occupied. Keep the buyer's repair plan separate from the ownership and contract information needed for closing."
      },
      {
        "q": "What should I submit for a Streamwood review?",
        "a": "Send the exact Streamwood, IL property address, both contracts, the end buyer's status and closing office. Identify missing documents and any unresolved conditions."
      },
      {
        "q": "What is a double closing?",
        "a": "A double closing uses two separate sales of the same property. You purchase from the seller and then sell to your end buyer, subject to the contracts and closing requirements for each transaction."
      },
      {
        "q": "What does transactional funding cost?",
        "a": "The published schedule starts at {{tier1Rate}} for funding up to {{tier1Cap}}, with a {{tier1Minimum}} minimum. Additional days, multiple closing companies and special paperwork can add costs, so confirm the written terms for your file."
      },
      {
        "q": "Does submitting a deal guarantee funding?",
        "a": "No. A submission requests a review of your purchase, resale and closing arrangements. Funding depends on the specific file and the applicable terms."
      }
    ],
    "nearby": [
      "chicago"
    ],
    "blurb": "Streamwood grew through postwar suburban development."
  },
  {
    "slug": "buffalo-grove",
    "name": "Buffalo Grove",
    "state": "IL",
    "stateName": "Illinois",
    "county": "Lake County",
    "formName": "Chicago-Wholesale-Double-Close-Form",
    "title": "Double Close Funding in Buffalo Grove, IL | Chicago Wholesale Double Close",
    "description": "Transactional funding review for a wholesale double closing in Buffalo Grove, Illinois. Review the fee schedule and submit the actual purchase and resale details.",
    "h1Bottom": "in Buffalo Grove, Illinois",
    "hero": "Buffalo Grove developed from an agricultural community into a residential suburb. Identify the county and parcel using the property records. The village name alone should not choose the recording jurisdiction for the closing file. Our transactional funding review brings the purchase, resale and closing arrangements together for that specific property. Send both prices and the documents you have; funding can be ready in as little as 24 hours.",
    "localNoteTitle": "Prepare the Buffalo Grove transaction file",
    "localNote": "Identify the county and parcel using the property records. The village name alone should not choose the recording jurisdiction for the closing file. Each sale needs its own contract and settlement requirements. Ask your closing office and qualified advisers which documents and state-specific rules apply before committing to the structure.",
    "whyHeading": "A review based on the Buffalo Grove property",
    "why": [
      "A Buffalo Grove transaction needs a review of the specific purchase and resale, not a decision based on the neighborhood alone. Submit the actual property details and identify any questions already raised by your closing office.",
      "Your Buffalo Grove funding request should identify the end buyer and any open contract conditions. Include the closing office so the review follows the actual transaction plan.",
      "The published fee schedule is a starting point for estimating the funding charge. Confirm the written terms and both sets of settlement costs before deciding whether the transaction works."
    ],
    "steps": [
      {
        "title": "Submit the property details",
        "text": "Send the Buffalo Grove, IL address, both agreed prices and the proposed closing date. Include the signed contracts you have and flag any documents still outstanding."
      },
      {
        "title": "Review both contracts",
        "text": "We review the purchase, resale and funding request with the information you provide. Missing documents or unresolved title conditions may affect whether the file can proceed."
      },
      {
        "title": "Confirm the closing plan",
        "text": "If the file is approved, the closing team confirms funding instructions and settlement requirements. Both transactions must follow the agreed sequence and written terms."
      }
    ],
    "faqs": [
      {
        "q": "What local details matter in Buffalo Grove?",
        "a": "Buffalo Grove developed from an agricultural community into a residential suburb. Identify the county and parcel using the property records. The village name alone should not choose the recording jurisdiction for the closing file."
      },
      {
        "q": "What should I submit for a Buffalo Grove review?",
        "a": "Send the exact Buffalo Grove, IL property address, both contracts, the end buyer's status and closing office. Identify missing documents and any unresolved conditions."
      },
      {
        "q": "What is a double closing?",
        "a": "A double closing uses two separate sales of the same property. You purchase from the seller and then sell to your end buyer, subject to the contracts and closing requirements for each transaction."
      },
      {
        "q": "What does transactional funding cost?",
        "a": "The published schedule starts at {{tier1Rate}} for funding up to {{tier1Cap}}, with a {{tier1Minimum}} minimum. Additional days, multiple closing companies and special paperwork can add costs, so confirm the written terms for your file."
      },
      {
        "q": "Does submitting a deal guarantee funding?",
        "a": "No. A submission requests a review of your purchase, resale and closing arrangements. Funding depends on the specific file and the applicable terms."
      }
    ],
    "nearby": [
      "chicago"
    ],
    "blurb": "Buffalo Grove developed from an agricultural community into a residential suburb."
  },
  {
    "slug": "mundelein",
    "name": "Mundelein",
    "state": "IL",
    "stateName": "Illinois",
    "county": "Lake County",
    "formName": "Chicago-Wholesale-Double-Close-Form",
    "title": "Double Close Funding in Mundelein, IL | Chicago Wholesale Double Close",
    "description": "Transactional funding review for a wholesale double closing in Mundelein, Illinois. Review the fee schedule and submit the actual purchase and resale details.",
    "h1Bottom": "in Mundelein, Illinois",
    "hero": "Mundelein has a community history that includes earlier names and its later suburban growth. Use the current legal identification for the property on both contracts. Supply available records and flag anything that might make the seller's authority unclear. Our transactional funding review brings the purchase, resale and closing arrangements together for that specific property. Send both prices and the documents you have; funding can be ready in as little as 24 hours.",
    "localNoteTitle": "Prepare the Mundelein transaction file",
    "localNote": "Use the current legal identification for the property on both contracts. Supply available records and flag anything that might make the seller's authority unclear. Each sale needs its own contract and settlement requirements. Ask your closing office and qualified advisers which documents and state-specific rules apply before committing to the structure.",
    "whyHeading": "A review based on the Mundelein property",
    "why": [
      "A Mundelein transaction needs a review of the specific purchase and resale, not a decision based on the neighborhood alone. Submit the actual property details and identify any questions already raised by your closing office.",
      "Your Mundelein funding request should identify the end buyer and any open contract conditions. Include the closing office so the review follows the actual transaction plan.",
      "The published fee schedule is a starting point for estimating the funding charge. Confirm the written terms and both sets of settlement costs before deciding whether the transaction works."
    ],
    "steps": [
      {
        "title": "Submit the property details",
        "text": "Send the Mundelein, IL address, both agreed prices and the proposed closing date. Include the signed contracts you have and flag any documents still outstanding."
      },
      {
        "title": "Review both contracts",
        "text": "We review the purchase, resale and funding request with the information you provide. Missing documents or unresolved title conditions may affect whether the file can proceed."
      },
      {
        "title": "Confirm the closing plan",
        "text": "If the file is approved, the closing team confirms funding instructions and settlement requirements. Both transactions must follow the agreed sequence and written terms."
      }
    ],
    "faqs": [
      {
        "q": "What local details matter in Mundelein?",
        "a": "Mundelein has a community history that includes earlier names and its later suburban growth. Use the current legal identification for the property on both contracts. Supply available records and flag anything that might make the seller's authority unclear."
      },
      {
        "q": "What should I submit for a Mundelein review?",
        "a": "Send the exact Mundelein, IL property address, both contracts, the end buyer's status and closing office. Identify missing documents and any unresolved conditions."
      },
      {
        "q": "What is a double closing?",
        "a": "A double closing uses two separate sales of the same property. You purchase from the seller and then sell to your end buyer, subject to the contracts and closing requirements for each transaction."
      },
      {
        "q": "What does transactional funding cost?",
        "a": "The published schedule starts at {{tier1Rate}} for funding up to {{tier1Cap}}, with a {{tier1Minimum}} minimum. Additional days, multiple closing companies and special paperwork can add costs, so confirm the written terms for your file."
      },
      {
        "q": "Does submitting a deal guarantee funding?",
        "a": "No. A submission requests a review of your purchase, resale and closing arrangements. Funding depends on the specific file and the applicable terms."
      }
    ],
    "nearby": [
      "chicago"
    ],
    "blurb": "Mundelein has a community history that includes earlier names and its later suburban growth."
  },
  {
    "slug": "highland-park",
    "name": "Highland Park",
    "state": "IL",
    "stateName": "Illinois",
    "county": "Lake County",
    "formName": "Chicago-Wholesale-Double-Close-Form",
    "title": "Double Close Funding in Highland Park, IL | Chicago Wholesale Double Close",
    "description": "Transactional funding review for a wholesale double closing in Highland Park, Illinois. Review the fee schedule and submit the actual purchase and resale details.",
    "h1Bottom": "in Highland Park, Illinois",
    "hero": "Highland Park developed as a North Shore community along Lake Michigan. A North Shore location does not confirm property value or funding eligibility. Provide the actual prices and parcel-specific documents for the proposed transaction. Our transactional funding review brings the purchase, resale and closing arrangements together for that specific property. Send both prices and the documents you have; funding can be ready in as little as 24 hours.",
    "localNoteTitle": "Prepare the Highland Park transaction file",
    "localNote": "A North Shore location does not confirm property value or funding eligibility. Provide the actual prices and parcel-specific documents for the proposed transaction. Each sale needs its own contract and settlement requirements. Ask your closing office and qualified advisers which documents and state-specific rules apply before committing to the structure.",
    "whyHeading": "A review based on the Highland Park property",
    "why": [
      "A Highland Park transaction needs a review of the specific purchase and resale, not a decision based on the neighborhood alone. Submit the actual property details and identify any questions already raised by your closing office.",
      "Your Highland Park funding request should identify the end buyer and any open contract conditions. Include the closing office so the review follows the actual transaction plan.",
      "The published fee schedule is a starting point for estimating the funding charge. Confirm the written terms and both sets of settlement costs before deciding whether the transaction works."
    ],
    "steps": [
      {
        "title": "Submit the property details",
        "text": "Send the Highland Park, IL address, both agreed prices and the proposed closing date. Include the signed contracts you have and flag any documents still outstanding."
      },
      {
        "title": "Review both contracts",
        "text": "We review the purchase, resale and funding request with the information you provide. Missing documents or unresolved title conditions may affect whether the file can proceed."
      },
      {
        "title": "Confirm the closing plan",
        "text": "If the file is approved, the closing team confirms funding instructions and settlement requirements. Both transactions must follow the agreed sequence and written terms."
      }
    ],
    "faqs": [
      {
        "q": "What local details matter in Highland Park?",
        "a": "Highland Park developed as a North Shore community along Lake Michigan. A North Shore location does not confirm property value or funding eligibility. Provide the actual prices and parcel-specific documents for the proposed transaction."
      },
      {
        "q": "What should I submit for a Highland Park review?",
        "a": "Send the exact Highland Park, IL property address, both contracts, the end buyer's status and closing office. Identify missing documents and any unresolved conditions."
      },
      {
        "q": "What is a double closing?",
        "a": "A double closing uses two separate sales of the same property. You purchase from the seller and then sell to your end buyer, subject to the contracts and closing requirements for each transaction."
      },
      {
        "q": "What does transactional funding cost?",
        "a": "The published schedule starts at {{tier1Rate}} for funding up to {{tier1Cap}}, with a {{tier1Minimum}} minimum. Additional days, multiple closing companies and special paperwork can add costs, so confirm the written terms for your file."
      },
      {
        "q": "Does submitting a deal guarantee funding?",
        "a": "No. A submission requests a review of your purchase, resale and closing arrangements. Funding depends on the specific file and the applicable terms."
      }
    ],
    "nearby": [
      "chicago"
    ],
    "blurb": "Highland Park developed as a North Shore community along Lake Michigan."
  },
  {
    "slug": "crystal-lake",
    "name": "Crystal Lake",
    "state": "IL",
    "stateName": "Illinois",
    "county": "McHenry County",
    "formName": "Chicago-Wholesale-Double-Close-Form",
    "title": "Double Close Funding in Crystal Lake, IL | Chicago Wholesale Double Close",
    "description": "Transactional funding review for a wholesale double closing in Crystal Lake, Illinois. Review the fee schedule and submit the actual purchase and resale details.",
    "h1Bottom": "in Crystal Lake, Illinois",
    "hero": "Crystal Lake's community history is connected with its namesake lake and early settlements. For a lake-area property, share any available parcel-specific survey and insurance information. The closing review should not generalize from the city name. Our transactional funding review brings the purchase, resale and closing arrangements together for that specific property. Send both prices and the documents you have; funding can be ready in as little as 24 hours.",
    "localNoteTitle": "Prepare the Crystal Lake transaction file",
    "localNote": "For a lake-area property, share any available parcel-specific survey and insurance information. The closing review should not generalize from the city name. Each sale needs its own contract and settlement requirements. Ask your closing office and qualified advisers which documents and state-specific rules apply before committing to the structure.",
    "whyHeading": "A review based on the Crystal Lake property",
    "why": [
      "A Crystal Lake transaction needs a review of the specific purchase and resale, not a decision based on the neighborhood alone. Submit the actual property details and identify any questions already raised by your closing office.",
      "Your Crystal Lake funding request should identify the end buyer and any open contract conditions. Include the closing office so the review follows the actual transaction plan.",
      "The published fee schedule is a starting point for estimating the funding charge. Confirm the written terms and both sets of settlement costs before deciding whether the transaction works."
    ],
    "steps": [
      {
        "title": "Submit the property details",
        "text": "Send the Crystal Lake, IL address, both agreed prices and the proposed closing date. Include the signed contracts you have and flag any documents still outstanding."
      },
      {
        "title": "Review both contracts",
        "text": "We review the purchase, resale and funding request with the information you provide. Missing documents or unresolved title conditions may affect whether the file can proceed."
      },
      {
        "title": "Confirm the closing plan",
        "text": "If the file is approved, the closing team confirms funding instructions and settlement requirements. Both transactions must follow the agreed sequence and written terms."
      }
    ],
    "faqs": [
      {
        "q": "What local details matter in Crystal Lake?",
        "a": "Crystal Lake's community history is connected with its namesake lake and early settlements. For a lake-area property, share any available parcel-specific survey and insurance information. The closing review should not generalize from the city name."
      },
      {
        "q": "What should I submit for a Crystal Lake review?",
        "a": "Send the exact Crystal Lake, IL property address, both contracts, the end buyer's status and closing office. Identify missing documents and any unresolved conditions."
      },
      {
        "q": "What is a double closing?",
        "a": "A double closing uses two separate sales of the same property. You purchase from the seller and then sell to your end buyer, subject to the contracts and closing requirements for each transaction."
      },
      {
        "q": "What does transactional funding cost?",
        "a": "The published schedule starts at {{tier1Rate}} for funding up to {{tier1Cap}}, with a {{tier1Minimum}} minimum. Additional days, multiple closing companies and special paperwork can add costs, so confirm the written terms for your file."
      },
      {
        "q": "Does submitting a deal guarantee funding?",
        "a": "No. A submission requests a review of your purchase, resale and closing arrangements. Funding depends on the specific file and the applicable terms."
      }
    ],
    "nearby": [
      "chicago"
    ],
    "blurb": "Crystal Lake's community history is connected with its namesake lake and early settlements."
  },
  {
    "slug": "st-charles",
    "name": "St. Charles",
    "state": "IL",
    "stateName": "Illinois",
    "county": "Kane County",
    "formName": "Chicago-Wholesale-Double-Close-Form",
    "title": "Double Close Funding in St. Charles, IL | Chicago Wholesale Double Close",
    "description": "Transactional funding review for a wholesale double closing in St. Charles, Illinois. Review the fee schedule and submit the actual purchase and resale details.",
    "h1Bottom": "in St. Charles, Illinois",
    "hero": "St. Charles has a Fox River setting and its own historic downtown. Identify whether the property is near downtown or in another part of the city. Both contracts should describe the same parcel and the closing team should confirm the settlement plan. Our transactional funding review brings the purchase, resale and closing arrangements together for that specific property. Send both prices and the documents you have; funding can be ready in as little as 24 hours.",
    "localNoteTitle": "Prepare the St. Charles transaction file",
    "localNote": "Identify whether the property is near downtown or in another part of the city. Both contracts should describe the same parcel and the closing team should confirm the settlement plan. Each sale needs its own contract and settlement requirements. Ask your closing office and qualified advisers which documents and state-specific rules apply before committing to the structure.",
    "whyHeading": "A review based on the St. Charles property",
    "why": [
      "A St. Charles transaction needs a review of the specific purchase and resale, not a decision based on the neighborhood alone. Submit the actual property details and identify any questions already raised by your closing office.",
      "Your St. Charles funding request should identify the end buyer and any open contract conditions. Include the closing office so the review follows the actual transaction plan.",
      "The published fee schedule is a starting point for estimating the funding charge. Confirm the written terms and both sets of settlement costs before deciding whether the transaction works."
    ],
    "steps": [
      {
        "title": "Submit the property details",
        "text": "Send the St. Charles, IL address, both agreed prices and the proposed closing date. Include the signed contracts you have and flag any documents still outstanding."
      },
      {
        "title": "Review both contracts",
        "text": "We review the purchase, resale and funding request with the information you provide. Missing documents or unresolved title conditions may affect whether the file can proceed."
      },
      {
        "title": "Confirm the closing plan",
        "text": "If the file is approved, the closing team confirms funding instructions and settlement requirements. Both transactions must follow the agreed sequence and written terms."
      }
    ],
    "faqs": [
      {
        "q": "What local details matter in St. Charles?",
        "a": "St. Charles has a Fox River setting and its own historic downtown. Identify whether the property is near downtown or in another part of the city. Both contracts should describe the same parcel and the closing team should confirm the settlement plan."
      },
      {
        "q": "What should I submit for a St. Charles review?",
        "a": "Send the exact St. Charles, IL property address, both contracts, the end buyer's status and closing office. Identify missing documents and any unresolved conditions."
      },
      {
        "q": "What is a double closing?",
        "a": "A double closing uses two separate sales of the same property. You purchase from the seller and then sell to your end buyer, subject to the contracts and closing requirements for each transaction."
      },
      {
        "q": "What does transactional funding cost?",
        "a": "The published schedule starts at {{tier1Rate}} for funding up to {{tier1Cap}}, with a {{tier1Minimum}} minimum. Additional days, multiple closing companies and special paperwork can add costs, so confirm the written terms for your file."
      },
      {
        "q": "Does submitting a deal guarantee funding?",
        "a": "No. A submission requests a review of your purchase, resale and closing arrangements. Funding depends on the specific file and the applicable terms."
      }
    ],
    "nearby": [
      "chicago"
    ],
    "blurb": "St. Charles has a Fox River setting and its own historic downtown."
  },
  {
    "slug": "batavia",
    "name": "Batavia",
    "state": "IL",
    "stateName": "Illinois",
    "county": "Kane County",
    "formName": "Chicago-Wholesale-Double-Close-Form",
    "title": "Double Close Funding in Batavia, IL | Chicago Wholesale Double Close",
    "description": "Transactional funding review for a wholesale double closing in Batavia, Illinois. Review the fee schedule and submit the actual purchase and resale details.",
    "h1Bottom": "in Batavia, Illinois",
    "hero": "Batavia's history reflects its Fox River industrial and community development. A historic area can provide context for a deal, but the parcel documents govern the closing review. Include the survey and identify any seller documentation still missing. Our transactional funding review brings the purchase, resale and closing arrangements together for that specific property. Send both prices and the documents you have; funding can be ready in as little as 24 hours.",
    "localNoteTitle": "Prepare the Batavia transaction file",
    "localNote": "A historic area can provide context for a deal, but the parcel documents govern the closing review. Include the survey and identify any seller documentation still missing. Each sale needs its own contract and settlement requirements. Ask your closing office and qualified advisers which documents and state-specific rules apply before committing to the structure.",
    "whyHeading": "A review based on the Batavia property",
    "why": [
      "A Batavia transaction needs a review of the specific purchase and resale, not a decision based on the neighborhood alone. Submit the actual property details and identify any questions already raised by your closing office.",
      "Your Batavia funding request should identify the end buyer and any open contract conditions. Include the closing office so the review follows the actual transaction plan.",
      "The published fee schedule is a starting point for estimating the funding charge. Confirm the written terms and both sets of settlement costs before deciding whether the transaction works."
    ],
    "steps": [
      {
        "title": "Submit the property details",
        "text": "Send the Batavia, IL address, both agreed prices and the proposed closing date. Include the signed contracts you have and flag any documents still outstanding."
      },
      {
        "title": "Review both contracts",
        "text": "We review the purchase, resale and funding request with the information you provide. Missing documents or unresolved title conditions may affect whether the file can proceed."
      },
      {
        "title": "Confirm the closing plan",
        "text": "If the file is approved, the closing team confirms funding instructions and settlement requirements. Both transactions must follow the agreed sequence and written terms."
      }
    ],
    "faqs": [
      {
        "q": "What local details matter in Batavia?",
        "a": "Batavia's history reflects its Fox River industrial and community development. A historic area can provide context for a deal, but the parcel documents govern the closing review. Include the survey and identify any seller documentation still missing."
      },
      {
        "q": "What should I submit for a Batavia review?",
        "a": "Send the exact Batavia, IL property address, both contracts, the end buyer's status and closing office. Identify missing documents and any unresolved conditions."
      },
      {
        "q": "What is a double closing?",
        "a": "A double closing uses two separate sales of the same property. You purchase from the seller and then sell to your end buyer, subject to the contracts and closing requirements for each transaction."
      },
      {
        "q": "What does transactional funding cost?",
        "a": "The published schedule starts at {{tier1Rate}} for funding up to {{tier1Cap}}, with a {{tier1Minimum}} minimum. Additional days, multiple closing companies and special paperwork can add costs, so confirm the written terms for your file."
      },
      {
        "q": "Does submitting a deal guarantee funding?",
        "a": "No. A submission requests a review of your purchase, resale and closing arrangements. Funding depends on the specific file and the applicable terms."
      }
    ],
    "nearby": [
      "chicago"
    ],
    "blurb": "Batavia's history reflects its Fox River industrial and community development."
  },
  {
    "slug": "gary",
    "name": "Gary",
    "state": "IN",
    "stateName": "Indiana",
    "county": "Lake County, IN",
    "formName": "Chicago-Wholesale-Double-Close-Form",
    "title": "Double Close Funding in Gary, IN | Chicago Wholesale Double Close",
    "description": "Transactional funding review for a wholesale double closing in Gary, Indiana. Review the fee schedule and submit the actual purchase and resale details.",
    "h1Bottom": "in Gary, Indiana",
    "hero": "Gary's visitor destinations include the city's lakefront and cultural history. Identify the Indiana property and closing office explicitly rather than applying an Illinois file assumption. Your advisers can confirm the state-specific contract and disclosure requirements. Our transactional funding review brings the purchase, resale and closing arrangements together for that specific property. Send both prices and the documents you have; funding can be ready in as little as 24 hours.",
    "localNoteTitle": "Prepare the Gary transaction file",
    "localNote": "Identify the Indiana property and closing office explicitly rather than applying an Illinois file assumption. Your advisers can confirm the state-specific contract and disclosure requirements. Each sale needs its own contract and settlement requirements. Ask your closing office and qualified advisers which documents and state-specific rules apply before committing to the structure.",
    "whyHeading": "A review based on the Gary property",
    "why": [
      "A Gary transaction needs a review of the specific purchase and resale, not a decision based on the neighborhood alone. Submit the actual property details and identify any questions already raised by your closing office.",
      "Your Gary funding request should identify the end buyer and any open contract conditions. Include the closing office so the review follows the actual transaction plan.",
      "The published fee schedule is a starting point for estimating the funding charge. Confirm the written terms and both sets of settlement costs before deciding whether the transaction works."
    ],
    "steps": [
      {
        "title": "Submit the property details",
        "text": "Send the Gary, IN address, both agreed prices and the proposed closing date. Include the signed contracts you have and flag any documents still outstanding."
      },
      {
        "title": "Review both contracts",
        "text": "We review the purchase, resale and funding request with the information you provide. Missing documents or unresolved title conditions may affect whether the file can proceed."
      },
      {
        "title": "Confirm the closing plan",
        "text": "If the file is approved, the closing team confirms funding instructions and settlement requirements. Both transactions must follow the agreed sequence and written terms."
      }
    ],
    "faqs": [
      {
        "q": "What local details matter in Gary?",
        "a": "Gary's visitor destinations include the city's lakefront and cultural history. Identify the Indiana property and closing office explicitly rather than applying an Illinois file assumption. Your advisers can confirm the state-specific contract and disclosure requirements."
      },
      {
        "q": "What should I submit for a Gary review?",
        "a": "Send the exact Gary, IN property address, both contracts, the end buyer's status and closing office. Identify missing documents and any unresolved conditions."
      },
      {
        "q": "What is a double closing?",
        "a": "A double closing uses two separate sales of the same property. You purchase from the seller and then sell to your end buyer, subject to the contracts and closing requirements for each transaction."
      },
      {
        "q": "What does transactional funding cost?",
        "a": "The published schedule starts at {{tier1Rate}} for funding up to {{tier1Cap}}, with a {{tier1Minimum}} minimum. Additional days, multiple closing companies and special paperwork can add costs, so confirm the written terms for your file."
      },
      {
        "q": "Does submitting a deal guarantee funding?",
        "a": "No. A submission requests a review of your purchase, resale and closing arrangements. Funding depends on the specific file and the applicable terms."
      }
    ],
    "nearby": [
      "chicago"
    ],
    "blurb": "Gary's visitor destinations include the city's lakefront and cultural history."
  },
  {
    "slug": "hammond",
    "name": "Hammond",
    "state": "IN",
    "stateName": "Indiana",
    "county": "Lake County, IN",
    "formName": "Chicago-Wholesale-Double-Close-Form",
    "title": "Double Close Funding in Hammond, IN | Chicago Wholesale Double Close",
    "description": "Transactional funding review for a wholesale double closing in Hammond, Indiana. Review the fee schedule and submit the actual purchase and resale details.",
    "h1Bottom": "in Hammond, Indiana",
    "hero": "Hammond is a distinct Northwest Indiana city within the broader Chicago region. State Indiana on the property and closing documents and identify the actual closing office. A metro-wide funding request does not make the legal requirements identical across the state line. Our transactional funding review brings the purchase, resale and closing arrangements together for that specific property. Send both prices and the documents you have; funding can be ready in as little as 24 hours.",
    "localNoteTitle": "Prepare the Hammond transaction file",
    "localNote": "State Indiana on the property and closing documents and identify the actual closing office. A metro-wide funding request does not make the legal requirements identical across the state line. Each sale needs its own contract and settlement requirements. Ask your closing office and qualified advisers which documents and state-specific rules apply before committing to the structure.",
    "whyHeading": "A review based on the Hammond property",
    "why": [
      "A Hammond transaction needs a review of the specific purchase and resale, not a decision based on the neighborhood alone. Submit the actual property details and identify any questions already raised by your closing office.",
      "Your Hammond funding request should identify the end buyer and any open contract conditions. Include the closing office so the review follows the actual transaction plan.",
      "The published fee schedule is a starting point for estimating the funding charge. Confirm the written terms and both sets of settlement costs before deciding whether the transaction works."
    ],
    "steps": [
      {
        "title": "Submit the property details",
        "text": "Send the Hammond, IN address, both agreed prices and the proposed closing date. Include the signed contracts you have and flag any documents still outstanding."
      },
      {
        "title": "Review both contracts",
        "text": "We review the purchase, resale and funding request with the information you provide. Missing documents or unresolved title conditions may affect whether the file can proceed."
      },
      {
        "title": "Confirm the closing plan",
        "text": "If the file is approved, the closing team confirms funding instructions and settlement requirements. Both transactions must follow the agreed sequence and written terms."
      }
    ],
    "faqs": [
      {
        "q": "What local details matter in Hammond?",
        "a": "Hammond is a distinct Northwest Indiana city within the broader Chicago region. State Indiana on the property and closing documents and identify the actual closing office. A metro-wide funding request does not make the legal requirements identical across the state line."
      },
      {
        "q": "What should I submit for a Hammond review?",
        "a": "Send the exact Hammond, IN property address, both contracts, the end buyer's status and closing office. Identify missing documents and any unresolved conditions."
      },
      {
        "q": "What is a double closing?",
        "a": "A double closing uses two separate sales of the same property. You purchase from the seller and then sell to your end buyer, subject to the contracts and closing requirements for each transaction."
      },
      {
        "q": "What does transactional funding cost?",
        "a": "The published schedule starts at {{tier1Rate}} for funding up to {{tier1Cap}}, with a {{tier1Minimum}} minimum. Additional days, multiple closing companies and special paperwork can add costs, so confirm the written terms for your file."
      },
      {
        "q": "Does submitting a deal guarantee funding?",
        "a": "No. A submission requests a review of your purchase, resale and closing arrangements. Funding depends on the specific file and the applicable terms."
      }
    ],
    "nearby": [
      "chicago"
    ],
    "blurb": "Hammond is a distinct Northwest Indiana city within the broader Chicago region."
  },
  {
    "slug": "crown-point",
    "name": "Crown Point",
    "state": "IN",
    "stateName": "Indiana",
    "county": "Lake County, IN",
    "formName": "Chicago-Wholesale-Double-Close-Form",
    "title": "Double Close Funding in Crown Point, IN | Chicago Wholesale Double Close",
    "description": "Transactional funding review for a wholesale double closing in Crown Point, Indiana. Review the fee schedule and submit the actual purchase and resale details.",
    "h1Bottom": "in Crown Point, Indiana",
    "hero": "Crown Point preserves a recognized historic district and courthouse-centered downtown. For a property in or near a historic district, identify any known restrictions without assuming they apply. Use the actual Indiana parcel and contract information for review. Our transactional funding review brings the purchase, resale and closing arrangements together for that specific property. Send both prices and the documents you have; funding can be ready in as little as 24 hours.",
    "localNoteTitle": "Prepare the Crown Point transaction file",
    "localNote": "For a property in or near a historic district, identify any known restrictions without assuming they apply. Use the actual Indiana parcel and contract information for review. Each sale needs its own contract and settlement requirements. Ask your closing office and qualified advisers which documents and state-specific rules apply before committing to the structure.",
    "whyHeading": "A review based on the Crown Point property",
    "why": [
      "A Crown Point transaction needs a review of the specific purchase and resale, not a decision based on the neighborhood alone. Submit the actual property details and identify any questions already raised by your closing office.",
      "Your Crown Point funding request should identify the end buyer and any open contract conditions. Include the closing office so the review follows the actual transaction plan.",
      "The published fee schedule is a starting point for estimating the funding charge. Confirm the written terms and both sets of settlement costs before deciding whether the transaction works."
    ],
    "steps": [
      {
        "title": "Submit the property details",
        "text": "Send the Crown Point, IN address, both agreed prices and the proposed closing date. Include the signed contracts you have and flag any documents still outstanding."
      },
      {
        "title": "Review both contracts",
        "text": "We review the purchase, resale and funding request with the information you provide. Missing documents or unresolved title conditions may affect whether the file can proceed."
      },
      {
        "title": "Confirm the closing plan",
        "text": "If the file is approved, the closing team confirms funding instructions and settlement requirements. Both transactions must follow the agreed sequence and written terms."
      }
    ],
    "faqs": [
      {
        "q": "What local details matter in Crown Point?",
        "a": "Crown Point preserves a recognized historic district and courthouse-centered downtown. For a property in or near a historic district, identify any known restrictions without assuming they apply. Use the actual Indiana parcel and contract information for review."
      },
      {
        "q": "What should I submit for a Crown Point review?",
        "a": "Send the exact Crown Point, IN property address, both contracts, the end buyer's status and closing office. Identify missing documents and any unresolved conditions."
      },
      {
        "q": "What is a double closing?",
        "a": "A double closing uses two separate sales of the same property. You purchase from the seller and then sell to your end buyer, subject to the contracts and closing requirements for each transaction."
      },
      {
        "q": "What does transactional funding cost?",
        "a": "The published schedule starts at {{tier1Rate}} for funding up to {{tier1Cap}}, with a {{tier1Minimum}} minimum. Additional days, multiple closing companies and special paperwork can add costs, so confirm the written terms for your file."
      },
      {
        "q": "Does submitting a deal guarantee funding?",
        "a": "No. A submission requests a review of your purchase, resale and closing arrangements. Funding depends on the specific file and the applicable terms."
      }
    ],
    "nearby": [
      "chicago"
    ],
    "blurb": "Crown Point preserves a recognized historic district and courthouse-centered downtown."
  }
];
