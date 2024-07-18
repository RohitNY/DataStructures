class Error {
  constructor(message, data) {
    this.message = message;
    this.data = data;
  }
}

class Group {
    constructor(title, products) {
        this.title = title;
        this.products = products || [];
    }
}

class Product {
    constructor(name, imageUrl, description, merchant, template) {
        this.validateArgs(arguments);
        this.name = name;
        this.imageUrl = imageUrl;
        this.description = description;
        this.merchant = merchant;
        this.template = template;
    }

    validateArgs(args) {
        if(!args || [args].some(arg => !arg))
            throw new Error("Product data is invalid", args);
    }
}

class Merchant {
    constructor(name, price, imageUrl) {
        this.name = name;
        this.price = price;
        this.imageUrl = imageUrl;
    }
}

function OnRenderAffiliateDevice(data) {
  if (!data || !data.Fragments)
    throw new Error("Supplied data is missing required info to render products", data);

  const groups = Object.keys(data.Fragments).reduce((result, key) => {
    if (!data.Fragments[key].Slices) return result;

    const groups = data.Fragments[key].Slices.map((slice) => GetGroup(slice));
    result.push(...groups);
    return result;
  }, []);

  if (!AreGroupsValid(groups))
    throw new Error("Group/Product data is either invalid or incomplete", {
      Input: data,
      Groups: groups,
    });
  return groups;
  groups.forEach((group) => RenderGroup(group));
}

function GetGroup(slice) {
    const products = slice._repeat.GroupDocs.map(groupDoc => GetProduct(groupDoc));

    return new Group(
        slice?._nonRepeat?.Fragments?.group_title?.Value,
        products
    )
}

function GetProduct(doc) {
    if(doc?.Fragments?.product?.Fragments == null) return null;
    const productFragment = doc.Fragments.product.Fragments;

    const merchant = GetMerchant(productFragment["affiliate_product.merchants"]);
    if(!merchant)
        throw new Error("Merchant details are missing", doc);

    //TODO: make sure where to use merchant value
    return new Product(
        productFragment["affiliate_product.name"]?.Value,
        productFragment["affiliate_product.image_url"]?.Value,
        merchant.name,
        productFragment["affiliate_product.description"]?.Blocks?.[0].Text,
        doc?.template?.Value
    )

}

function GetMerchant(merchants) {
    if(!merchants || !merchants.GroupDocs) return null;
    const merchantDetails = merchants.GroupDocs[0]?.Fragments;
    if(!merchantDetails) return null;

    return new Merchant(
        merchantDetails.merchant.Value,
        merchantDetails.merchant_list_price?.Value,
        merchantDetails.product_root_url.Value
    )
}

function AreGroupsValid(groups) {
    return groups.every(group => !!group.title && !!group.products);
}
