export function isFormValidationErrors(
   errors: any
): errors is { path: string; message: string }[] {
   return (
      Array.isArray(errors) &&
      errors.every(
         (error) =>
            typeof error.path === "string" && typeof error.message === "string"
      )
   );
}
