function submitApplication(e) {
    e.preventDefault(); // You can ignore this; prevents the default form submission!
    
    const jobListing = document.getElementsByName("job");
    let noneChecked = true;

    for(let i = 0; i < jobListing.length; i++){
        if(jobListing[i].checked){
            alert("Thank you for applying to be a " + jobListing[i].value + "!");
            noneChecked = false;
        }
    }

    if(noneChecked){
        alert("Please select a job!");
    }
    
    // TODO: Alert the user of the job that they applied for!
}