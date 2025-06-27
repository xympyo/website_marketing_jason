import React from "react";

function Maps() {
  const googleMapsEmbedUrl =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15865.038711819216!2d106.60897539999999!3d-6.2294561!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f8d1279b9357%3A0xbdd3ff6a4ef8b98b!2sLippo%20Karawaci%2C%20Kelapa%20Dua%2C%20Tangerang%20Regency%2C%20Banten!5e0!3m2!1sen!2sid!4v1751065947781!5m2!1sen!2sid";
  return (
    <div className="ms-0 me-0 md:ms-64 md:me-64 mt-32">
      <div
        className="w-full relative rounded-lg shadow-2xl"
        style={{ paddingBottom: "75%" }}
      >
        <iframe
          src={googleMapsEmbedUrl}
          className="absolute top-0 left-0 w-full h-full rounded-lg"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Location Map"
        ></iframe>
      </div>
    </div>
  );
}

export default Maps;
