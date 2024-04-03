let dashboardImageEl = document.getElementById("dashboardImage");
let dashboardEl = document.getElementById("dashboard");

let invoicesImageEl = document.getElementById("invoicesImage");
let invoicesEl = document.getElementById("invoices");
let invoicesListItemEl = document.getElementById("invoicesListItem");

let proposalsImageEl = document.getElementById("proposalsImage");
let proposalsEl = document.getElementById("proposals");
let proposalsListItemEl = document.getElementById("proposalsListItem");

let servicesImageEl = document.getElementById("servicesImage");
let servicesEl = document.getElementById("services");
let servicesListItemEl = document.getElementById("servicesListItem");

let transactionsImageEl = document.getElementById("transactionsImage");
let transactionsEl = document.getElementById("transactions");
let transactionsListItemEl = document.getElementById("transactionsListItem");

let projectsImageEl = document.getElementById("projectsImage");
let projectsEl = document.getElementById("projects");
let projectsListItemEl = document.getElementById("projectsListItem");

let customersImageEl = document.getElementById("customersImage");
let customersEl = document.getElementById("customers");
let customersListItemEl = document.getElementById("customersListItem");

function dashboard() {
    dashboardImageEl.src="icons/dashboard-on.png";
    dashboardEl.style.color= "#1CD2AD";
    
    invoicesEl.style.color= "#767676";
    invoicesImageEl.src="icons/invoice-off.png";
    invoicesListItemEl.classList.remove("active");

    servicesImageEl.src="icons/services-off.png";
    servicesEl.style.color="#767676";
    servicesListItemEl.classList.remove("active");

    proposalsImageEl.src="icons/proposals-off.png";
    proposalsEl.style.color="#767676";
    proposalsListItemEl.classList.remove("active");

    projectsImageEl.src="icons/projects-off.png";
    projectsEl.style.color="#767676";
    projectsListItemEl.classList.remove("active");

    transactionsImageEl.src="icons/transactions-off.png";
    transactionsEl.style.color="#767676";
    transactionsListItemEl.classList.remove("active");

    customersImageEl.src="icons/customers-off.png";
    customersEl.style.color="#767676";
    customersListItemEl.classList.remove("active");
}
function invoices() {
    invoicesImageEl.src="icons/invoice-on.png";
    invoicesEl.style.color="#1CD2AD";
    invoicesListItemEl.classList.add("active");

    proposalsImageEl.src="icons/proposals-off.png";
    proposalsEl.style.color="#767676";
    proposalsListItemEl.classList.remove("active");

    dashboardImageEl.src="icons/dashboard-off.png";
    dashboardEl.style.color= "#767676";

    servicesImageEl.src="icons/services-off.png";
    servicesEl.style.color="#767676";
    servicesListItemEl.classList.remove("active");

    projectsImageEl.src="icons/projects-off.png";
    projectsEl.style.color="#767676";
    projectsListItemEl.classList.remove("active");

    transactionsImageEl.src="icons/transactions-off.png";
    transactionsEl.style.color="#767676";
    transactionsListItemEl.classList.remove("active");

    customersImageEl.src="icons/customers-off.png";
    customersEl.style.color="#767676";
    customersListItemEl.classList.remove("active");
}
function proposals() {
    proposalsImageEl.src="icons/proposals-on.png";
    proposalsEl.style.color="#1CD2AD";
    proposalsListItemEl.classList.add("active");

    invoicesImageEl.src="icons/invoice-off.png";
    invoicesEl.style.color="#767676";
    invoicesListItemEl.classList.remove("active");

    dashboardImageEl.src="icons/dashboard-off.png";
    dashboardEl.style.color= "#767676";

    servicesImageEl.src="icons/services-off.png";
    servicesEl.style.color="#767676";
    servicesListItemEl.classList.remove("active");

    projectsImageEl.src="icons/projects-off.png";
    projectsEl.style.color="#767676";
    projectsListItemEl.classList.remove("active");

    transactionsImageEl.src="icons/transactions-off.png";
    transactionsEl.style.color="#767676";
    transactionsListItemEl.classList.remove("active");

    customersImageEl.src="icons/customers-off.png";
    customersEl.style.color="#767676";
    customersListItemEl.classList.remove("active");
}

function services() {
    servicesImageEl.src="icons/services-on.png";
    servicesEl.style.color="#1CD2AD";
    servicesListItemEl.classList.add("active");

    invoicesImageEl.src="icons/invoice-off.png";
    invoicesEl.style.color="#767676";
    invoicesListItemEl.classList.remove("active");

    proposalsImageEl.src="icons/proposals-off.png";
    proposalsEl.style.color="#767676";
    proposalsListItemEl.classList.remove("active");

    dashboardImageEl.src="icons/dashboard-off.png";
    dashboardEl.style.color= "#767676";

    projectsImageEl.src="icons/projects-off.png";
    projectsEl.style.color="#767676";
    projectsListItemEl.classList.remove("active");

    transactionsImageEl.src="icons/transactions-off.png";
    transactionsEl.style.color="#767676";
    transactionsListItemEl.classList.remove("active");

    customersImageEl.src="icons/customers-off.png";
    customersEl.style.color="#767676";
    customersListItemEl.classList.remove("active");
}

function transactions() {

    transactionsImageEl.src="icons/transactions-on.png";
    transactionsEl.style.color="#1CD2AD";
    transactionsListItemEl.classList.add("active");

    servicesImageEl.src="icons/services-off.png";
    servicesEl.style.color="#767676";
    servicesListItemEl.classList.remove("active");

    invoicesImageEl.src="icons/invoice-off.png";
    invoicesEl.style.color="#767676";
    invoicesListItemEl.classList.remove("active");

    proposalsImageEl.src="icons/proposals-off.png";
    proposalsEl.style.color="#767676";
    proposalsListItemEl.classList.remove("active");

    dashboardImageEl.src="icons/dashboard-off.png";
    dashboardEl.style.color= "#767676";

    projectsImageEl.src="icons/projects-off.png";
    projectsEl.style.color="#767676";
    projectsListItemEl.classList.remove("active");

    customersImageEl.src="icons/customers-off.png";
    customersEl.style.color="#767676";
    customersListItemEl.classList.remove("active");
}

function projects() {
    projectsImageEl.src="icons/projects-on.png";
    projectsEl.style.color="#1CD2AD";
    projectsListItemEl.classList.add("active");

    servicesImageEl.src="icons/services-off.png";
    servicesEl.style.color="#767676";
    servicesListItemEl.classList.remove("active");

    transactionsImageEl.src="icons/transactions-off.png";
    transactionsEl.style.color="#767676";
    transactionsListItemEl.classList.remove("active");

    servicesImageEl.src="icons/services-off.png";
    servicesEl.style.color="#767676";
    servicesListItemEl.classList.remove("active");

    invoicesImageEl.src="icons/invoice-off.png";
    invoicesEl.style.color="#767676";
    invoicesListItemEl.classList.remove("active");

    proposalsImageEl.src="icons/proposals-off.png";
    proposalsEl.style.color="#767676";
    proposalsListItemEl.classList.remove("active");

    dashboardImageEl.src="icons/dashboard-off.png";
    dashboardEl.style.color= "#767676";

    customersImageEl.src="icons/customers-off.png";
    customersEl.style.color="#767676";
    customersListItemEl.classList.remove("active");

}

function customers() {
    customersImageEl.src="icons/customers-on.png";
    customersEl.style.color="#1CD2AD";
    customersListItemEl.classList.add("active");

    transactionsImageEl.src="icons/transactions-off.png";
    transactionsEl.style.color="#767676";
    transactionsListItemEl.classList.remove("active");

    projectsImageEl.src="icons/projects-off.png";
    projectsEl.style.color="#767676";
    projectsListItemEl.classList.remove("active");

    servicesImageEl.src="icons/services-off.png";
    servicesEl.style.color="#767676";
    servicesListItemEl.classList.remove("active");

    projectsImageEl.src="icons/projects-off.png";
    projectsEl.style.color="#767676";
    projectsListItemEl.classList.remove("active");

    servicesImageEl.src="icons/services-off.png";
    servicesEl.style.color="#767676";
    servicesListItemEl.classList.remove("active");

    invoicesImageEl.src="icons/invoice-off.png";
    invoicesEl.style.color="#767676";
    invoicesListItemEl.classList.remove("active");

    proposalsImageEl.src="icons/proposals-off.png";
    proposalsEl.style.color="#767676";
    proposalsListItemEl.classList.remove("active");

    dashboardImageEl.src="icons/dashboard-off.png";
    dashboardEl.style.color= "#767676";

    projectsImageEl.src="icons/projects-off.png";
    projectsEl.style.color="#767676";
    projectsListItemEl.classList.remove("active");
}