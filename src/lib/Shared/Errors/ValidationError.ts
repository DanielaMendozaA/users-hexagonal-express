export class ValidationError extends Error {
  details: any;

  constructor(details: any) {
    console.log('Validation errors details:', details);

    const errorMessages = details
      .map((error: any) => {
        console.log(error);  
        return `${error.path}: ${error.msg}`; 
      })
      .join(', ');

    super(`Validation Error: ${errorMessages}`);

    this.details = details;
    this.name = 'ValidationError';
  }
}
