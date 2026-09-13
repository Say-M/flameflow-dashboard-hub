import type { FlameflowState } from "@/types/flameflow";
export const initialState: FlameflowState = {
 project:{id:"ngo-ledger",name:"NGO Ledger",slug:"ngo-ledger",description:"A streamlined expense tracking tool designed for NGOs to manage project costs, categorize spending, and maintain financial transparency.",createdAt:"2026-08-14",visibility:"public",isFavorite:false,badgeVisible:true,previewUrl:"https://ngo-ledger.flameflow.local",environment:"production",deploymentStatus:"deployed"},
 users:[
  {id:"u1",name:"Admin User",email:"admin@ngo-ledger.local",role:"Admin",status:"Active",lastActive:"2 minutes ago",joined:"Aug 14, 2026"},
  {id:"u2",name:"Project Manager",email:"manager@ngo-ledger.local",role:"Manager",status:"Active",lastActive:"1 hour ago",joined:"Aug 16, 2026"},
  {id:"u3",name:"Finance Officer",email:"finance@ngo-ledger.local",role:"Member",status:"Active",lastActive:"Yesterday",joined:"Aug 18, 2026"},
  {id:"u4",name:"Viewer",email:"viewer@ngo-ledger.local",role:"Viewer",status:"Pending",lastActive:"Never",joined:"Sep 10, 2026"}],
 integrations:[
  ["stripe","Stripe","Payments","Accept and manage payments"],["ga","Google Analytics","Analytics","Understand app traffic"],["sheets","Google Sheets","Developer tools","Sync tabular reports"],["slack","Slack","Communication","Send workspace alerts"],["gmail","Gmail","Communication","Send project messages"],["supabase","Supabase","Storage","Connect hosted data"],["firebase","Firebase","Authentication","Manage app identity"],["github","GitHub","Developer tools","Sync source changes"],["webhooks","Webhooks","Developer tools","Deliver event payloads"],["rest","REST API","Developer tools","Connect custom systems"]
 ].map((x,i)=>({id:x[0],name:x[1],category:x[2],description:x[3],connected:i===1||i===7})),
 agents:[
  ["a1","UI Designer","Improves interface consistency",true,"12 min ago",42],["a2","Frontend Engineer","Builds accessible product surfaces",true,"1 hour ago",86],["a3","Code Reviewer","Reviews changes and risks",true,"Yesterday",31],["a4","SEO Specialist","Optimizes search readiness",false,"3 days ago",12],["a5","Test Engineer","Checks critical user journeys",true,"5 hours ago",64]
 ].map(x=>({id:String(x[0]),name:String(x[1]),description:String(x[2]),enabled:Boolean(x[3]),lastRun:String(x[4]),runs:Number(x[5]),permissions:["Read project files","Run tests","Read analytics"]})),
 workflows:[
  {id:"w1",name:"On project update",trigger:"Project update",enabled:true,lastRun:"18 min ago",steps:["Trigger","Validate data","Update project","Notify owner","Complete"]},
  {id:"w2",name:"On deployment",trigger:"Deployment",enabled:true,lastRun:"Yesterday",steps:["Trigger","Run checks","Deploy","Notify team","Complete"]},
  {id:"w3",name:"On user registration",trigger:"User registration",enabled:false,lastRun:"4 days ago",steps:["Trigger","Verify user","Assign role","Send welcome","Complete"]},
  {id:"w4",name:"Scheduled analytics report",trigger:"Scheduled",enabled:true,lastRun:"Sep 12",steps:["Schedule","Collect data","Build report","Send report","Complete"]}],
 logs:[
  ["Success","Users","User invited","req_2F8A"],["Info","Settings","Project settings updated","req_7C21"],["Success","Workflows","Workflow executed","req_91BD"],["Info","Agents","Agent activated","req_A782"],["Warning","API","API request rate approaching limit","req_D031"],["Info","Domain","Domain added","req_F23C"],["Success","Security","Security scan completed","req_114A"]
 ].map((x,i)=>({id:`l${i}`,time:`Sep 13, 2026 · ${String(19-i).padStart(2,"0")}:2${i}`,severity:x[0] as "Info"|"Success"|"Warning"|"Error",source:x[1],message:x[2],requestId:x[3]})),
 mcp:[
  {id:"m1",name:"NGO Ledger Context Server",description:"Project context and records",connected:true,tools:8,synced:"4 min ago"},
  {id:"m2",name:"Expense Workflow Server",description:"Expense review actions",connected:true,tools:5,synced:"1 hour ago"},
  {id:"m3",name:"Accounting Data Server",description:"Financial reporting context",connected:false,tools:6,synced:"2 days ago"}],
 collaborators:[{id:"c1",name:"Project Manager",email:"manager@ngo-ledger.local",role:"Editor",status:"Active"},{id:"c2",name:"Finance Viewer",email:"finance@ngo-ledger.local",role:"Viewer",status:"Active"}]
};
export const collections=[
 {name:"Expenses",description:"Submitted project expenses",records:248,updated:"8 min ago"},{name:"Projects",description:"Program and grant projects",records:18,updated:"1 hour ago"},{name:"Employees",description:"Team member profiles",records:46,updated:"Yesterday"},{name:"Vendors",description:"Approved suppliers",records:72,updated:"Yesterday"},{name:"Approvals",description:"Expense review decisions",records:183,updated:"12 min ago"},{name:"Categories",description:"Expense classifications",records:24,updated:"Sep 10"},{name:"Transactions",description:"Ledger entries",records:612,updated:"5 min ago"}];
export const expenses=[
 {id:"EXP-2048",project:"Clean Water Initiative",employee:"Maya Rahman",amount:"$1,240.00",category:"Field supplies",status:"Approved"},
 {id:"EXP-2047",project:"Education Access",employee:"Ibrahim Noor",amount:"$486.50",category:"Transport",status:"Pending"},
 {id:"EXP-2046",project:"Food Security",employee:"Nadia Karim",amount:"$2,810.00",category:"Procurement",status:"Approved"},
 {id:"EXP-2045",project:"Health Outreach",employee:"Samir Das",amount:"$730.25",category:"Events",status:"Review"}];
