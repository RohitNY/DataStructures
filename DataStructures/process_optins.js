function processOptins(optins, redirectUrl) {

    let data = {
        SpectrumCustomer: GetSpectrumCustomer(),
        GlobalMemberToken: GetSpectrumCustomer()?.UserInternal?.GlobalMemberToken,
        EmailAddress: GetSpectrumCustomer()?.User.Email,
        EmailHashSha256: GetSpectrumCustomer()?.User?.EmailHashSha256
    }

    if (!data.SpectrumCustomer)
        return;

    // Modify below object to add subscriptions
    data.SpectrumCustomer.OptIns.Subscriptions = optins.reduce((result,optin)=>{
        result[optin] = 0;
        return result;
    }
    , {});

    SpectrumRegistrationService.Handlers.OnProcessOptins = (data)=>{
        console.log("optins processing is complete");
        console.log(data);
        // kill the alert box that shows up on navigating away from the site.
        showAlert = "false";
        if (redirectUrl)
            window.location.href = redirectUrl;
    }

    SpectrumRegistrationCore.Controller.ProcessOptins(data);

}
