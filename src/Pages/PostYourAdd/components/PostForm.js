import { useTranslation } from "react-i18next";
import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { Col, Container, Input, Label, Row } from "reactstrap";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";

// Components
import { createAdsAsync } from "../../../store/reducers/ads.reducer";

const PostForm = () => {
  const options = [
    { value: "0", label: "Afghanistan" },
    { value: "1", label: "land Islands" },
    { value: "2", label: "Albania" },
    { value: "3", label: "Algeria" },
    { value: "4", label: "American Samoa" },
    { value: "5", label: "Andorra" },
    { value: "6", label: "Angola" },
    { value: "7", label: "Anguilla" },
    { value: "8", label: "Antarctica" },
    { value: "9", label: "Antigua and Barbuda" },
    { value: "10", label: "Argentina" },
    { value: "11", label: "Armenia" },
    { value: "12", label: "Aruba" },
    { value: "13", label: "Australia" },
    { value: "14", label: "Austria" },
    { value: "15", label: "Azerbaijan" },
    { value: "16", label: "Bahamas" },
    { value: "17", label: "Bahrain" },
    { value: "18", label: "Bangladesh" },
    { value: "19", label: "Barbados" },
    { value: "20", label: "Belarus" },
    { value: "21", label: "Belgium" },
    { value: "22", label: "Belize" },
    { value: "23", label: "Benin" },
    { value: "24", label: "Bermuda" },
    { value: "25", label: "Bhutan" },
    { value: "26", label: "Bolivia, Plurinational State of " },
    { value: "27", label: "Bosnia and Herzegovina" },
    { value: "28", label: "Botswana" },
    { value: "29", label: "Bouvet Island" },
    { value: "30", label: "Brazil" },
    { value: "31", label: "British Indian Ocean Territory" },
    { value: "32", label: "Brunei Darussalam" },
    { value: "33", label: "Bulgaria" },
    { value: "34", label: "Burkina Faso" },
    { value: "35", label: "Burundi" },
    { value: "36", label: "Cambodia" },
    { value: "37", label: "Cameroon" },
    { value: "38", label: "Canada" },
    { value: "39", label: "Cape Verde" },
    { value: "40", label: "Cayman Islands" },
    { value: "41", label: "Central African Republic" },
    { value: "42", label: "Chad" },
    { value: "43", label: "Chile" },
    { value: "44", label: "China" },
    { value: "45", label: "Christmas Island" },
    { value: "46", label: "Cocos (Keeling) Islands" },
    { value: "47", label: "Colombia" },
    { value: "48", label: "Comoros" },
    { value: "49", label: "Congo" },
    { value: "50", label: "Congo, the Democratic Republic of the" },
    { value: "51", label: "Cook Islands" },
    { value: "52", label: "Costa Rica" },
    { value: "53", label: "Cocirc;te d'Ivoire" },
    { value: "54", label: "Croatia" },
    { value: "55", label: "Cuba" },
    { value: "56", label: "Cyprus" },
    { value: "57", label: "Czech Republic" },
    { value: "58", label: "Denmark" },
    { value: "59", label: "Djibouti" },
    { value: "60", label: "Dominica" },
    { value: "61", label: "Dominican Republic" },
    { value: "62", label: "Ecuador" },
    { value: "63", label: "Egypt" },
    { value: "64", label: "El Salvador" },
    { value: "65", label: "Equatorial Guinea" },
    { value: "66", label: "Eritrea" },
    { value: "67", label: "Estonia" },
    { value: "68", label: "Ethiopia" },
    { value: "69", label: "Falkland Islands (Malvinas)" },
    { value: "70", label: "Faroe Islands" },
    { value: "71", label: "Fiji" },
    { value: "72", label: "Finland" },
    { value: "73", label: "France" },
    { value: "74", label: "French Guiana" },
    { value: "75", label: "French Polynesia" },
    { value: "76", label: "French Southern Territories" },
    { value: "77", label: "Gabon" },
    { value: "78", label: "Gambia" },
    { value: "79", label: "Georgia" },
    { value: "80", label: "Germany" },
    { value: "81", label: "Ghana" },
    { value: "82", label: "Gibraltar" },
    { value: "83", label: "Greece" },
    { value: "84", label: "Greenland" },
    { value: "85", label: "Grenada" },
    { value: "86", label: "Guadeloupe" },
    { value: "87", label: "Guam" },
    { value: "88", label: "Guatemala" },
    { value: "89", label: "Guernsey" },
    { value: "90", label: "Guinea" },
    { value: "91", label: "Guinea-Bissau" },
    { value: "92", label: "Guyana" },
    { value: "93", label: "Haiti" },
    { value: "94", label: "Heard Island and McDonald Islands" },
    { value: "95", label: "Holy See (Vatican City State)" },
    { value: "96", label: "Honduras" },
    { value: "97", label: "Hong Kong" },
    { value: "98", label: "Hungary" },
    { value: "99", label: "Iceland" },
    { value: "100", label: "India" },
    { value: "1.1", label: "Indonesia" },
    { value: "1.2", label: "Iran, Islamic Republic of" },
    { value: "1.3", label: "Iraq" },
    { value: "1.4", label: "Ireland" },
    { value: "1.5", label: "Isle of Man" },
    { value: "1.6", label: "Israel" },
    { value: "1.7", label: "Italy" },
    { value: "1.8", label: "Jamaica" },
    { value: "1.9", label: "Japan" },
    { value: "2.0", label: "Jersey" },
    { value: "2.1", label: "Jordan" },
    { value: "2.2", label: "Kazakhstan" },
    { value: "2.3", label: "Kenya" },
    { value: "2.4", label: "Kiribati" },
    { value: "2.5", label: "Korea, Democratic People's Republic of" },
    { value: "2.6", label: "Korea, Republic of" },
    { value: "2.7", label: "Kuwait" },
    { value: "2.8", label: "Kyrgyzstan" },
    { value: "2.9", label: "Lao  People's Democratic Republic" },
    { value: "3.0", label: "Latvia" },
    { value: "3.1", label: "Lebanon" },
    { value: "3.2", label: "Lesotho" },
    { value: "3.3", label: "Liberia" },
    { value: "3.4", label: "Libyan Arab Jamahiriya" },
    { value: "3.5", label: "Liechtenstein" },
    { value: "3.6", label: "Lithuania" },
    { value: "3.7", label: "Luxembourg" },
    { value: "3.8", label: "Macao" },
    { value: "3.9", label: "Macedonia, the former Yugoslav Republic of" },
    { value: "4.0", label: "Madagascar" },
    { value: "4.1", label: "Malawi" },
    { value: "4.2", label: "Malaysia" },
    { value: "4.3", label: "Maldives" },
    { value: "4.4", label: "Mali" },
    { value: "4.5", label: "Malta" },
    { value: "4.6", label: "Marshall Islands" },
    { value: "4.7", label: "Martinique" },
    { value: "4.8", label: "Mauritania" },
    { value: "4.9", label: "Mauritius" },
    { value: "5.0", label: "Mayotte" },
    { value: "5.1", label: "Mexico" },
    { value: "5.2", label: "Micronesia, Federated States of" },
    { value: "5.3", label: "Moldova, Republic of" },
    { value: "5.4", label: "Monaco" },
    { value: "5.5", label: "Mongolia" },
    { value: "5.6", label: "Montenegro" },
    { value: "5.7", label: "Montserrat" },
    { value: "5.8", label: "Morocco" },
    { value: "5.9", label: "Mozambique" },
    { value: "6.0", label: "Myanmar" },
    { value: "6.1", label: "Namibia" },
    { value: "6.2", label: "Nauru" },
    { value: "6.3", label: "Nepal" },
    { value: "6.4", label: "Netherlands" },
    { value: "6.5", label: "Netherlands Antilles" },
    { value: "6.6", label: "New Caledonia" },
    { value: "6.7", label: "New Zealand" },
    { value: "6.8", label: "Nicaragua" },
    { value: "6.9", label: "Niger" },
    { value: "8.0", label: "Nigeria" },
    { value: "8.1", label: "Niue" },
    { value: "8.2", label: "Norfolk Island" },
    { value: "8.3", label: "Northern Mariana Islands" },
    { value: "8.4", label: "Norway" },
    { value: "8.5", label: "Oman" },
    { value: "8.6", label: "Pakistan" },
    { value: "8.7", label: "Palau" },
    { value: "8.8", label: "Palestinian Territory, Occupied" },
    { value: "8.9", label: "Panama" },
    { value: "9.0", label: "Papua New Guinea" },
    { value: "9.1", label: "Paraguay" },
    { value: "9.2", label: "Peru" },
    { value: "9.3", label: "Philippines" },
    { value: "9.4", label: "Pitcairn" },
    { value: "9.5", label: "Poland" },
    { value: "9.6", label: "Portugal" },
    { value: "9.7", label: "Puerto Rico" },
    { value: "9.8", label: "Qatar" },
    { value: "9.9", label: "Reacute;union" },
    { value: "1a", label: "Romania" },
    { value: "2a", label: "Russian Federation" },
    { value: "3a", label: "Rwanda" },
    { value: "4a", label: "Saint Barth&eacute;lemy" },
    { value: "5a", label: "Saint Helena, Ascension and Tristan da Cunha" },
    { value: "6a", label: "Saint Kitts and Nevis" },
    { value: "7a", label: "Saint Lucia" },
    { value: "8a", label: "Saint Martin (French part)" },
    { value: "9a", label: "Saint Pierre and Miquelon" },
    { value: "10a", label: "Saint Vincent and the Grenadines" },
    { value: "11a", label: "Samoa" },
    { value: "12a", label: "San Marino" },
    { value: "13a", label: "Sao Tome and Principe" },
    { value: "14a", label: "Saudi" },
    { value: "15a", label: "Senegal Arabia" },
    { value: "16a", label: "Serbia" },
    { value: "17a", label: "Seychelles" },
    { value: "18a", label: "Sierra Leone" },
    { value: "19a", label: "Singapore" },
    { value: "20a", label: "Slovakia" },
    { value: "21a", label: "Slovenia" },
    { value: "22a", label: "Solomon Islands" },
    { value: "23a", label: "Somalia" },
    { value: "24a", label: "South Africa" },
    { value: "25a", label: "South Georgia and the South Sandwich Islands" },
    { value: "26a", label: "Spain" },
    { value: "27a", label: "Sri Lanka" },
    { value: "28a", label: "Sudan" },
    { value: "29a", label: "Suriname" },
    { value: "30a", label: "Svalbard and Jan Mayen" },
    { value: "31a", label: "Swaziland" },
    { value: "32a", label: "Sweden" },
    { value: "33a", label: "Switzerland" },
    { value: "34a", label: "Syrian Arab Republic" },
    { value: "35a", label: "Taiwan, Province of China" },
    { value: "36a", label: "Tajikistan" },
    { value: "37a", label: "Tanzania, United Republic of" },
    { value: "38a", label: "Thailand" },
    { value: "39a", label: "Timor-Leste" },
    { value: "40a", label: "Togo" },
    { value: "41a", label: "Tokelau" },
    { value: "42a", label: "Tonga" },
    { value: "43a", label: "Trinidad and Tobago" },
    { value: "44a", label: "Tunisia" },
    { value: "45a", label: "Turkey" },
    { value: "46a", label: "Turkmenistan" },
    { value: "47a", label: "Turks and Caicos Islands" },
    { value: "48a", label: "Tuvalu" },
    { value: "49a", label: "Uganda" },
    { value: "50a", label: "Ukraine" },
    { value: "51a", label: "United Arab Emirates" },
    { value: "52a", label: "United Kingdom" },
    { value: "53a", label: "United States" },
    { value: "54a", label: "United States Minor Outlying Islands" },
    { value: "55a", label: "Uruguay" },
    { value: "56a", label: "Uzbekistan" },
    { value: "57a", label: "Vanuatu" },
    { value: "58a", label: "Venezuela, Bolivarian Republic of" },
    { value: "59a", label: "Viet Nam" },
    { value: "60a", label: "Virgin Islands, British" },
    { value: "61a", label: "Virgin Islands, U.S." },
    { value: "62a", label: "Wallis and Futuna" },
    { value: "63a", label: "Western Sahara" },
    { value: "64a", label: "Yemen" },
    { value: "65a", label: "Zambia" },
    { value: "66a", label: "Zimbabwe" }
  ];
  const {t} = useTranslation();
  const formRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();





  const handleAdSCreate = async (event) => {
    event.preventDefault();
    const formData = new FormData(formRef.current);
    const formDataObject = {};
    formData.forEach((value, key) => {
      formDataObject[key] = value;
    });

    setLoading(true);
    try {
      const sendData = {
        ad:formDataObject
      }
      await dispatch(createAdsAsync(sendData));
      toast.success("Ad created successfully");
      // navigate("/signin");
    } catch (error) {
      console.log("Error On Ad Form:", error);
      toast.error(error?.response?.data?.error);
    } finally {
      setLoading(false);
    }
    // Handle ad creation here
    console.log('Form Data-----------------:', formDataObject);
  }
  return (
   <React.Fragment>
      <section className="section">
        <Container>
          <Row>
            <Col lg={12}>
              <div className="bg-primary-subtle text-primary p-3">
                <h5 className="mb-0 fs-17">{t("post_ad_heading")}</h5>
              </div>
            </Col>
          </Row>
          {/* <Form onSubmit={handleSubmit(onSubmit)} className="auth-form"></Form> */}
          <form ref={formRef} action="#" className="job-post-form shadow mt-4">
            <div className="job-post-content box-shadow-md rounded-3 p-4">
              <Row className="row">
                <Col lg={12}>
                  <div className="mb-4">
                    <Label htmlFor="petName" className="form-label">
                      {t("pet_name_label")}
                    </Label>
                    <Input
                      type="text"
                      className="form-control"
                      id="jobtitle"
                      placeholder="Name"
                      name="name"
                    />
                  </div>
                </Col>
                <Col lg={12}>
                  <div className="mb-4">
                    <Label htmlFor="petDescription" className="form-label">
                      {t("pet_description_label")}
                    </Label>
                    <textarea
                      className="form-control"
                      id="petDescription"
                      rows="3"
                      placeholder={t("pet_description_placeholder")}
                      name="description"
                    ></textarea>
                  </div>
                </Col>
                <Col lg={6}>
                  <div className="mb-4">
                    <Label htmlFor="petGender" className="form-label">
                      {t("pet_gender_label")}
                    </Label>
                    <Input
                      type="text"
                      className="form-control"
                      id="petGender"
                      placeholder={t("pet_gender_placeholder")}
                      name="gender"
                    />
                  </div>
                </Col>
                <Col lg={6}>
                  <div className="mb-4">
                    <Label htmlFor="petAge" className="form-label">
                      {t("pet_age_label")}
                    </Label>
                    <Input
                      type="number"
                      className="form-control"
                      id="petAge"
                      placeholder={t("pet_age_placeholder")}
                      name="age"
                    />
                  </div>
                </Col>
                <Col lg={6}>
                  <div className="mb-4">
                    <Label htmlFor="email" className="form-label">
                      {t("email_label")}
                    </Label>
                    <Input
                      type="email"
                      className="form-control"
                      id="email"
                      placeholder={t("email_placeholder")}
                      name="email"
                    />
                  </div>
                </Col>
                <Col lg={6}>
                  <div className="mb-4">
                    <Label htmlFor="phoneNumber" className="form-label">
                      {t("phone_number_label")}
                    </Label>
                    <Input
                      type="number"
                      className="form-control"
                      id="phoneNumber"
                      placeholder={t("phone_number_placeholder")}
                      name="phone_number"
                    />
                  </div>
                </Col>
                <Col lg={4}>
                  <div className="mb-4">
                    <Label htmlFor="petType" className="form-label">
                      {t("pet_type_label")}
                    </Label>
                    <Input
                      type="text"
                      className="form-control"
                      id="petType"
                      placeholder={t("pet_type_placeholder")}
                      name="pet_type"
                    />
                  </div>
                </Col>
                <Col lg={4}>
                  <div className="mb-4">
                    <Label htmlFor="adType" className="form-label">
                      {t("ad_type_label")}
                    </Label>
                    <select
                      className="form-select"
                      id="adType"
                      aria-label="Default select example"
                      name="ad_type"
                    >
                       
                        <option value="Missing">{t("ad_type_missing")}</option>
                        <option value="Temporary adoption">{t("ad_type_temporary_adoption")}</option>
                        <option value="Mating">{t("ad_type_mating")}</option>
                        <option value="Free rescue">{t("ad_type_free_rescue")}</option>
                        <option value="Sale">{t("ad_type_sale")}</option>
                        <option value="Adoption">{t("ad_type_adoption")}</option>


                    </select>
                  </div>
                </Col>
                <Col lg={4}>
                  <div className="mb-4">
                    <Label htmlFor="petPrice" className="form-label">
                      {t("pet_price_label")}
                    </Label>
                    <Input
                      type="number"
                      className="form-control"
                      id="petPrice"
                      placeholder={t("pet_price_placeholder")}
                      name="price"
                    />
                  </div>
                </Col>
                <Col lg={6}>
                  <div className="mb-4">
                    <Label htmlFor="country" className="form-label">
                      {t("country_label")}
                    </Label>
                   <select
                    className="form-select"
                    id="country"
                    aria-label="Default select example"
                    name="country"
                  >
                    {options.map((option) => (
                      <option key={option.value} value={option.label}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                  </div>
                </Col>
                <Col lg={3}>
                  <div className="mb-4">
                    <Label htmlFor="city" className="form-label">
                      {t("city_label")}
                    </Label>
                    <Input
                      type="text"
                      className="form-control"
                      id="city"
                      placeholder={t("city_placeholder")}
                      name="city"
                    />
                  </div>
                </Col>
                <Col lg={3}>
                  <div className="mb-4">
                    <Label htmlFor="zipcode" className="form-label">
                      {t("zipcode_label")}
                    </Label>
                    <Input
                      type="text"
                      className="form-control"
                      id="zipcode"
                      placeholder={t("zipcode_placeholder")}
                      name="zipcode"
                    />
                  </div>
                </Col>
                <Col lg={12}>
                  <div className="mb-4">
                    <Label htmlFor="petImages" className="form-label">
                      {t("pet_images_label")}
                    </Label>
                    <Input
                      type="file"
                      className="form-control"
                      id="petImages"
                      name="pet_image"
                    />
                  </div>
                </Col>
                <Col lg={12}>
                  <div className="d-flex flex-wrap align-items-start gap-1 justify-content-end">
                    <Link to="/myprofile" className="btn btn-success">
                      {t("back_button")}
                    </Link>
                    <Link to="#" onClick={handleAdSCreate} className="btn btn-primary">
                      {t("submit_button")}{" "} <i className="mdi mdi-send"></i>
                    </Link>
                  </div>
                </Col>
              </Row>
            </div>
          </form>
        </Container>
      </section>
    </React.Fragment>
  );
};

export default PostForm;
