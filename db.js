// ===================== EMBEDDED DATABASE =====================
const DB = {
  customers: [
    {customer_id:1,full_name:"Rukhmi Sharma",phone:"9876543210",email:"rukhmi@example.com",dob:"2017-03-15",gender:"Female",aadhaar_last4:"1234",pan:"ABCRS1234A",kyc_status:"Verified",
     address:{line1:"101, Sunflower Apartments",line2:"Lokhandwala Complex",city:"Mumbai",state:"Maharashtra",pincode:"400053",country:"India"},nri:false},
    {customer_id:2,full_name:"Sneha Patil",phone:"9876543211",email:"sneha@example.com",dob:"1995-01-19",gender:"Female",aadhaar_last4:"5678",pan:"DEFSP5678B",kyc_status:"Verified",
     address:{line1:"23, Prabhat Road",line2:"Near FC Road",city:"Pune",state:"Maharashtra",pincode:"411004",country:"India"},nri:false},
    {customer_id:3,full_name:"Rahul Gupta",phone:"9876543212",email:"rahul@example.com",dob:"1988-12-12",gender:"Male",aadhaar_last4:"9101",pan:"GHIRG9101C",kyc_status:"Verified",
     address:{line1:"Flat 5B, Green Park",line2:"Connaught Place Area",city:"Delhi",state:"Delhi",pincode:"110001",country:"India"},nri:false},
    {customer_id:4,full_name:"Farhan Khan",phone:"9876543213",email:"farhan@example.com",dob:"2014-08-17",gender:"Male",aadhaar_last4:"1121",pan:"JKLFK1121D",kyc_status:"Verified",
     address:{line1:"78, Hawa Mahal Road",line2:"Pink City",city:"Jaipur",state:"Rajasthan",pincode:"302001",country:"India"},nri:false},
    {customer_id:5,full_name:"Ananya Joshi",phone:"9876543214",email:"ananya@example.com",dob:"1997-06-04",gender:"Female",aadhaar_last4:"3141",pan:"MNOAJ3141E",kyc_status:"Verified",
     address:{line1:"12, Gangapur Road",line2:"CBS",city:"Nashik",state:"Maharashtra",pincode:"422013",country:"India"},nri:false},
    {customer_id:6,full_name:"Rohan Mehta",phone:"9876543215",email:"rohan@example.com",dob:"1992-11-30",gender:"Male",aadhaar_last4:"5161",pan:"PQRRM5161F",kyc_status:"Verified",
     address:{line1:"9, New Market Street",line2:"MP Nagar",city:"Bhopal",state:"Madhya Pradesh",pincode:"462011",country:"India"},nri:false},
    {customer_id:7,full_name:"Rashmi Hanjankar",phone:"9833273458",email:"rashmi@example.com",dob:"2002-05-11",gender:"Female",aadhaar_last4:"7181",pan:"STVRH7181G",kyc_status:"Verified",
     address:{line1:"Room 204, MIT Girls Hostel",line2:"Paud Road",city:"Pune",state:"Maharashtra",pincode:"411038",country:"India"},nri:false},
    {customer_id:8,full_name:"Laksh Mahajan",phone:"8108805511",email:"laksh@example.com",dob:"2003-01-28",gender:"Male",aadhaar_last4:"9202",pan:"UVWLM9202H",kyc_status:"Verified",
     address:{line1:"Flat 302, Shree Residency",line2:"Andheri West",city:"Mumbai",state:"Maharashtra",pincode:"400058",country:"India"},nri:false},
    {customer_id:9,full_name:"Dev Patel",phone:"9324656416",email:"dev@example.com",dob:"2002-09-14",gender:"Male",aadhaar_last4:"1222",pan:"XYZDP1222I",kyc_status:"Verified",
     address:{line1:"Sector 15, Plot 22",line2:"Vashi",city:"Navi Mumbai",state:"Maharashtra",pincode:"400703",country:"India"},nri:false},
    {customer_id:10,full_name:"Riddhima Khare",phone:"9326166072",email:"riddhima@example.com",dob:"2003-07-03",gender:"Female",aadhaar_last4:"3242",pan:"ABCRK3242J",kyc_status:"Verified",
     address:{line1:"A/204, BKC Residences",line2:"Bandra Kurla Complex",city:"Mumbai",state:"Maharashtra",pincode:"400051",country:"India"},nri:false}
  ],
  accounts: [
    {account_id:1,customer_id:1,account_number:"SB100001001",account_type:"Savings",balance:42500.75,currency:"INR",branch:"Andheri West, Mumbai",ifsc_code:"SHIR0001001",status:"Active"},
    {account_id:2,customer_id:2,account_number:"SB100001002",account_type:"Savings",balance:67200.25,currency:"INR",branch:"Pune Shivajinagar",ifsc_code:"SHIR0001002",status:"Active"},
    {account_id:3,customer_id:3,account_number:"SB100001003",account_type:"Savings",balance:33450.00,currency:"INR",branch:"Delhi Connaught Place",ifsc_code:"SHIR0001003",status:"Active"},
    {account_id:4,customer_id:4,account_number:"SB100001004",account_type:"Savings",balance:22100.60,currency:"INR",branch:"Jaipur Pink City",ifsc_code:"SHIR0001004",status:"Active"},
    {account_id:5,customer_id:5,account_number:"SB100001005",account_type:"Savings",balance:89600.00,currency:"INR",branch:"Nashik CBS Branch",ifsc_code:"SHIR0001005",status:"Active"},
    {account_id:6,customer_id:6,account_number:"CA100001006",account_type:"Current",balance:175000.00,currency:"INR",branch:"Bhopal New Market",ifsc_code:"SHIR0001006",status:"Active"},
    {account_id:7,customer_id:7,account_number:"SB100001007",account_type:"Savings",balance:54800.00,currency:"INR",branch:"Pune FC Road Branch",ifsc_code:"SHIR0001007",status:"Active"},
    {account_id:8,customer_id:8,account_number:"SB100001008",account_type:"Savings",balance:38250.50,currency:"INR",branch:"Andheri West, Mumbai",ifsc_code:"SHIR0001008",status:"Active"},
    {account_id:9,customer_id:9,account_number:"CA100001009",account_type:"Current",balance:7100000000.00,currency:"INR",branch:"Vashi, Navi Mumbai",ifsc_code:"SHIR0001009",status:"Active"},
    {account_id:10,customer_id:10,account_number:"SB100001010",account_type:"Savings",balance:29900.75,currency:"INR",branch:"Bandra Kurla Complex",ifsc_code:"SHIR0001010",status:"Active"}
  ],
  transactions: [
    {txn_id:1,account_id:1,txn_type:"Credit",amount:10000,balance_after:52500.75,description:"Salary credit",ref_number:"TXN2024030001",counterparty:"Shiro Corp HR",txn_date:"2024-03-01",status:"Success"},
    {txn_id:2,account_id:1,txn_type:"UPI",amount:2000,balance_after:50500.75,description:"Groceries",ref_number:"TXN2024030002",counterparty:"BigBasket",txn_date:"2024-03-05",status:"Success"},
    {txn_id:3,account_id:1,txn_type:"ATM",amount:8000,balance_after:42500.75,description:"ATM withdrawal",ref_number:"TXN2024030003",counterparty:"-",txn_date:"2024-03-10",status:"Success"},
    {txn_id:4,account_id:2,txn_type:"Credit",amount:22000,balance_after:89200.25,description:"Monthly salary",ref_number:"TXN2024030004",counterparty:"Infosys",txn_date:"2024-03-01",status:"Success"},
    {txn_id:5,account_id:2,txn_type:"UPI",amount:22000,balance_after:67200.25,description:"Home loan EMI",ref_number:"TXN2024030005",counterparty:"HDFC Home Loans",txn_date:"2024-03-05",status:"Success"},
    {txn_id:6,account_id:3,txn_type:"Credit",amount:30000,balance_after:63450.00,description:"Salary",ref_number:"TXN2024030006",counterparty:"Wipro Ltd",txn_date:"2024-03-01",status:"Success"},
    {txn_id:7,account_id:3,txn_type:"UPI",amount:10000,balance_after:53450.00,description:"Online shopping",ref_number:"TXN2024030007",counterparty:"Amazon India",txn_date:"2024-03-09",status:"Success"},
    {txn_id:8,account_id:3,txn_type:"ATM",amount:20000,balance_after:33450.00,description:"ATM cash",ref_number:"TXN2024030008",counterparty:"-",txn_date:"2024-03-12",status:"Success"},
    {txn_id:9,account_id:4,txn_type:"Credit",amount:12000,balance_after:34100.60,description:"Part-time income",ref_number:"TXN2024030009",counterparty:"Swiggy Delivery",txn_date:"2024-03-01",status:"Success"},
    {txn_id:10,account_id:4,txn_type:"UPI",amount:12000,balance_after:22100.60,description:"Phone & electricity",ref_number:"TXN2024030010",counterparty:"Jio & MSEDCL",txn_date:"2024-03-10",status:"Success"},
    {txn_id:11,account_id:5,txn_type:"Credit",amount:35000,balance_after:124600.00,description:"Salary",ref_number:"TXN2024030011",counterparty:"TCS Pune",txn_date:"2024-03-01",status:"Success"},
    {txn_id:12,account_id:5,txn_type:"NEFT",amount:35000,balance_after:89600.00,description:"Rent payment",ref_number:"TXN2024030012",counterparty:"Landlord Kulkarni",txn_date:"2024-03-04",status:"Success"},
    {txn_id:13,account_id:6,txn_type:"Credit",amount:80000,balance_after:255000.00,description:"Business receipt",ref_number:"TXN2024030013",counterparty:"Global Tech Ltd",txn_date:"2024-03-03",status:"Success"},
    {txn_id:14,account_id:6,txn_type:"RTGS",amount:80000,balance_after:175000.00,description:"Vendor payment",ref_number:"TXN2024030014",counterparty:"Supply Co. India",txn_date:"2024-03-06",status:"Success"},
    {txn_id:15,account_id:7,txn_type:"Credit",amount:25000,balance_after:79800.00,description:"Internship stipend",ref_number:"TXN2024030015",counterparty:"Infosys BPM",txn_date:"2024-03-01",status:"Success"},
    {txn_id:16,account_id:7,txn_type:"UPI",amount:15000,balance_after:64800.00,description:"College fees",ref_number:"TXN2024030016",counterparty:"MIT Pune",txn_date:"2024-03-03",status:"Success"},
    {txn_id:17,account_id:7,txn_type:"ATM",amount:10000,balance_after:54800.00,description:"ATM withdrawal",ref_number:"TXN2024030017",counterparty:"-",txn_date:"2024-03-08",status:"Success"},
    {txn_id:18,account_id:8,txn_type:"Credit",amount:20000,balance_after:58250.50,description:"Part-time salary",ref_number:"TXN2024030018",counterparty:"Shiro Corp HR",txn_date:"2024-03-01",status:"Success"},
    {txn_id:19,account_id:8,txn_type:"UPI",amount:10000,balance_after:48250.50,description:"Hostel rent",ref_number:"TXN2024030019",counterparty:"PG Owner Sharma",txn_date:"2024-03-05",status:"Success"},
    {txn_id:20,account_id:8,txn_type:"Debit",amount:10000,balance_after:38250.50,description:"Project expenses",ref_number:"TXN2024030020",counterparty:"Electronics Store",txn_date:"2024-03-11",status:"Success"}
  ],
  loans: [
    {loan_id:1,customer_id:1,loan_type:"Personal",principal:300000,outstanding:210000,interest_rate:12.5,tenure_months:36,emi_amount:10041.67,next_emi_date:"2024-04-05",status:"Active"},
    {loan_id:2,customer_id:2,loan_type:"Home",principal:3500000,outstanding:3200000,interest_rate:8.5,tenure_months:240,emi_amount:30411.00,next_emi_date:"2024-04-05",status:"Active"},
    {loan_id:3,customer_id:3,loan_type:"Education",principal:500000,outstanding:420000,interest_rate:10.0,tenure_months:48,emi_amount:12683.00,next_emi_date:"2024-04-05",status:"Active"},
    {loan_id:4,customer_id:5,loan_type:"Vehicle",principal:600000,outstanding:480000,interest_rate:9.0,tenure_months:60,emi_amount:12450.00,next_emi_date:"2024-04-01",status:"Active"},
    {loan_id:5,customer_id:6,loan_type:"Business",principal:2000000,outstanding:1800000,interest_rate:11.0,tenure_months:60,emi_amount:43470.00,next_emi_date:"2024-04-01",status:"Active"},
    {loan_id:6,customer_id:10,loan_type:"Personal",principal:150000,outstanding:90000,interest_rate:14.0,tenure_months:24,emi_amount:7213.00,next_emi_date:"2024-04-07",status:"Active"}
  ],
  cards: [
    {card_id:1,account_id:1,card_type:"Debit",card_last4:"1001",network:"RuPay",credit_limit:null,outstanding_due:null,due_date:null,status:"Active",expiry_date:"2027-03-31"},
    {card_id:2,account_id:2,card_type:"Debit",card_last4:"1002",network:"RuPay",credit_limit:null,outstanding_due:null,due_date:null,status:"Active",expiry_date:"2026-08-31"},
    {card_id:3,account_id:3,card_type:"Credit",card_last4:"1003",network:"Visa",credit_limit:100000,outstanding_due:9500,due_date:"2024-04-10",status:"Active",expiry_date:"2026-06-30"},
    {card_id:4,account_id:4,card_type:"Debit",card_last4:"1004",network:"RuPay",credit_limit:null,outstanding_due:null,due_date:null,status:"Active",expiry_date:"2025-11-30"},
    {card_id:5,account_id:5,card_type:"Credit",card_last4:"1005",network:"Mastercard",credit_limit:120000,outstanding_due:14200,due_date:"2024-04-15",status:"Active",expiry_date:"2027-01-31"},
    {card_id:6,account_id:6,card_type:"Credit",card_last4:"1006",network:"Visa",credit_limit:500000,outstanding_due:45000,due_date:"2024-04-01",status:"Active",expiry_date:"2027-05-31"},
    {card_id:7,account_id:7,card_type:"Debit",card_last4:"1007",network:"RuPay",credit_limit:null,outstanding_due:null,due_date:null,status:"Active",expiry_date:"2026-12-31"},
    {card_id:8,account_id:8,card_type:"Debit",card_last4:"1008",network:"RuPay",credit_limit:null,outstanding_due:null,due_date:null,status:"Active",expiry_date:"2026-03-31"},
    {card_id:9,account_id:9,card_type:"Debit",card_last4:"1009",network:"RuPay",credit_limit:null,outstanding_due:null,due_date:null,status:"Active",expiry_date:"2025-10-31"},
    {card_id:10,account_id:10,card_type:"Debit",card_last4:"1010",network:"RuPay",credit_limit:null,outstanding_due:null,due_date:null,status:"Active",expiry_date:"2027-02-28"}
  ],
  fixed_deposits: [
    {fd_id:1,customer_id:2,principal:200000,interest_rate:7.1,tenure_months:24,maturity_amount:230440,start_date:"2023-03-01",maturity_date:"2025-03-01",status:"Active"},
    {fd_id:2,customer_id:6,principal:500000,interest_rate:7.5,tenure_months:12,maturity_amount:537500,start_date:"2024-01-01",maturity_date:"2025-01-01",status:"Active"},
    {fd_id:3,customer_id:9,principal:100000,interest_rate:7.0,tenure_months:12,maturity_amount:107000,start_date:"2024-01-01",maturity_date:"2025-01-01",status:"Active"}
  ]
};
 
// ========== SCHEMES DATA ==========
const SCHEMES = {
  womens: [
    {name:"Mahila Samridhi Yojana",tag:"Savings",desc:"Special savings scheme for women with 0.5% extra interest rate. Minimum deposit ₹500, maximum ₹2,00,000. Linked with Jan Dhan accounts."},
    {name:"Sukanya Samridhi Account",tag:"Girl Child",desc:"Government-backed scheme for girl children below 10 years. Interest rate 8.2% p.a. Tax-free maturity amount under Section 80C."},
    {name:"Stree Shakti Loan Scheme",tag:"Business Loan",desc:"Collateral-free business loans upto ₹25 lakh for women entrepreneurs at 0.5% concession on interest rates. No processing fee."},
    {name:"Mahila Savings Certificate",tag:"Fixed Income",desc:"3-year fixed deposit exclusively for women with 7.7% interest. Premature withdrawal allowed after 1 year with minor penalty."},
    {name:"Nari Shakti Home Loan",tag:"Home Loan",desc:"Home loans for women applicants at 0.05% lower rate. Additional ₹50,000 top-up for solar panel installation. Co-applicant benefit available."},
    {name:"SHG-Bank Linkage Programme",tag:"Microfinance",desc:"Credit facility for women Self Help Groups up to ₹10 lakh at 7% p.a. No collateral required. Supported by NABARD guidelines."}
  ],
  nri: [
    {name:"NRE Savings Account",tag:"NRI Savings",desc:"Non-Resident External account in INR. Freely repatriable. Interest income tax-free in India. Joint account with resident relative allowed."},
    {name:"NRO Account",tag:"NRI Income",desc:"Non-Resident Ordinary account for income earned in India (rent, dividends). Up to USD 1 million repatriable per year after taxes."},
    {name:"FCNR (B) Deposit",tag:"Foreign Currency FD",desc:"Fixed deposit in foreign currencies (USD, GBP, EUR). Fully repatriable. Term: 1-5 years. Protected against exchange rate fluctuations."},
    {name:"NRI Home Loan",tag:"Property",desc:"Home loans for NRIs purchasing property in India. Loan upto ₹5 crore. EMI can be paid from NRE/NRO account. Joint borrower option."},
    {name:"NRI Investment in Mutual Funds",tag:"Investment",desc:"NRIs can invest in Indian mutual funds via NRE/NRO accounts. Automatic repatriation facility. FATCA compliance required for US/Canada NRIs."},
    {name:"Remittance Plus Service",tag:"Money Transfer",desc:"Zero-fee inward remittance upto $10,000/month. Real-time credit to linked savings account. Exchange rate locked at time of transfer."}
  ]
};
 
// ========== CHILD LOCK RULES (RBI Guidelines) ==========
const CHILD_LOCK_RULES = {
  blocked: [
    "Credit Card issuance (minors cannot hold credit cards as per RBI)",
    "Overdraft / Loan applications (no credit facility for minors)",
    "RTGS / NEFT above ₹10,000 per transaction",
    "International transactions & forex services",
    "Fixed Deposit booking above ₹50,000 without guardian approval",
    "Third-party fund transfer above ₹5,000/day",
    "Investment in Mutual Funds, Stocks, or Derivatives"
  ],
  allowed: [
    "Basic Savings Account with deposit & withdrawal",
    "ATM withdrawals up to ₹2,000/day",
    "UPI payments up to ₹2,000/day",
    "View account balance and mini-statements",
    "Fixed Deposits up to ₹50,000 (guardian co-sign required)",
    "Sukanya Samridhi / Minor savings schemes",
    "Passbook & e-statement download"
  ]
};
 
// ========== HELPERS ==========
function getCustomerByEmail(email){ return DB.customers.find(c=>c.email.toLowerCase()===email.toLowerCase())||null; }
function getAccountByCustomer(cid){ return DB.accounts.filter(a=>a.customer_id===cid); }
function getTransactionsByCustomer(cid){ const ids=getAccountByCustomer(cid).map(a=>a.account_id); return DB.transactions.filter(t=>ids.includes(t.account_id)); }
function getLoansByCustomer(cid){ return DB.loans.filter(l=>l.customer_id===cid); }
function getCardsByCustomer(cid){ const ids=getAccountByCustomer(cid).map(a=>a.account_id); return DB.cards.filter(c=>ids.includes(c.account_id)); }
function getFDsByCustomer(cid){ return DB.fixed_deposits.filter(f=>f.customer_id===cid); }
function fmt(n){ return '₹'+Number(n).toLocaleString('en-IN',{minimumFractionDigits:2}); }
function calcAge(dob){ const d=new Date(dob),n=new Date(); let a=n.getFullYear()-d.getFullYear(); if(n.getMonth()<d.getMonth()||(n.getMonth()===d.getMonth()&&n.getDate()<d.getDate()))a--; return a; }
function isMinor(cust){ return calcAge(cust.dob)<18; }
function fmtAddress(addr){ return `${addr.line1}, ${addr.line2}, ${addr.city}, ${addr.state} - ${addr.pincode}`; }
