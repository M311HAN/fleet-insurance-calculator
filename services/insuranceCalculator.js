/**
 * Calculate insurance cost for kilometers between 0 and 20
 * @param {number} km - Kilometers driven
 * @returns {number} - Insurance cost
 */
function calculateInsuranceForRange0To20(km) {
    return 200;
  }
  
  /**
   * Calculate insurance cost for kilometers between 21 and 50
   * @param {number} km - Kilometers driven
   * @returns {number} - Insurance cost
   */
  function calculateInsuranceForRange21To50(km) {
    return 200 + (km - 20);
  }
  
  /**
   * Calculate insurance cost for kilometers between 51 and 100
   * @param {number} km - Kilometers driven
   * @returns {number} - Insurance cost
   */
  function calculateInsuranceForRange51To100(km) {
    return 220 + (km - 50) * 0.8;
  }
  
  /**
   * Calculate insurance cost for kilometers above 100
   * @param {number} km - Kilometers driven
   * @returns {number} - Insurance cost
   */
  function calculateInsuranceForRange101Plus(km) {
    return 260 + (km - 100) * 0.5;
  }
  
  /**
   * Main function to calculate insurance based on kilometers
   * @param {number} km - Kilometers driven
   * @returns {number} - Insurance cost
   */
  function calculateInsurance(km) {
    if (km <= 20) {
      return calculateInsuranceForRange0To20(km);
    } else if (km <= 50) {
      return calculateInsuranceForRange21To50(km);
    } else if (km <= 100) {
      return calculateInsuranceForRange51To100(km);
    } else {
      return calculateInsuranceForRange101Plus(km);
    }
  }
  
  export default calculateInsurance;
  
