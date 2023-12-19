// Effective Annual IR Calculator

function calculate_effective_annual_ir(){
    const interest_rate_amount = document.getElementById("interest_rate_amount");
    const compoundingPeriodPerYearInput = document.getElementById("compounding_period_per_year");
    const statedInterestRateInput = document.getElementById("stated_interest_rate");

    let p = Number(compoundingPeriodPerYearInput.value);
    let i = Number(statedInterestRateInput.value / 100);

    const result = Math.pow((1 + (i/p)), p) - 1;
    interest_rate_amount.textContent = result.toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 4});
}