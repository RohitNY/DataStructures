const customer = GetSpectrumCustomer();
const cart = dbCart;
const userType = experienceData?.Type;
const data = {
    gmt: customer?.UserInternal?.GlobalMemberToken,
    sct: cart?.ShoppingCartToken,
    addressId: customer?.User?.AddressId,
    userType
};
data
console.log("user:" ,data);
