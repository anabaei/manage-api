
const isValidDate = (dateString) => {
  // Check if dateString is a valid date
  const date = new Date(dateString);

  // Check if the date object is valid
  if (isNaN(date.getTime())) {
    // Invalid date
    return false;
  }
  // Additional validation logic (optional)
  return true;
};


// Middleware function for validating request query parameters
const validateQuery = (req, res, next) => {
    // Perform validation logic here
    const { start_date, end_date } = req.query;
  
    // Example validation: Check if start_date and end_date are valid dates
    if (!isValidDate(start_date) || !isValidDate(end_date)) {
      return res.status(400).json({ message: 'Invalid date format' });
    }
  
    // If validation passes, move to the next route handler
    next();
  };

  export default validateQuery