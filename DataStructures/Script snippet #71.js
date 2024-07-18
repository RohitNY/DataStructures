$(".show-options").on("touchStart", function (e) {
                var displaySettings = {
                    top: 100,
                    left: win.SpectrumUtils.IsMobile() ? 0 : 100,
                    closeOnOverlayClick: false,
                    scrollToTop: false
                };
                var lightbox = renderLB("mobileMultiOffersTemplate", "uniNavPopupContainer", {}, displaySettings);
           
var renderLB = (templateName, id, data, displaySettings) => {
        try {
            var template = $('script#' + templateName);
            if (!template || !template.length) return;
            var containerAttributes = { "id": id, "class": "spectrumLightbox_content2" };
            var lightboxContainer = $("<div></div>", containerAttributes);
            var spectrumForm = $("form[id=\"spectrum-form\"]");
            if (!spectrumForm.length) {
                spectrumForm = $("form");
            }
            spectrumForm.append(lightboxContainer);
            lightboxContainer.append(template.render(data));
       
            var lightbox = {
                content: lightboxContainer,
                data: {
                    "PathDeviceModel": { "DeviceType": "LearnMoreHowToEnter" }
                },
                displaySettings: displaySettings
            }
            win.SpectrumLightbox.ShowLightbox(lightbox);
            return lightbox;
        } catch (err) {
            onHardError("Failed to render an LearnMoreHowToEnter Device", err);
        }
    }

});