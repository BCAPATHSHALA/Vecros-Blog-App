export const DB_NAME = "consolebustersapi";

/**
 * @type {{ ADMIN: "ADMIN"; USER: "USER"; MODERATOR: "MODERATOR"; GUEST: "GUEST"; PREMIUM: "PREMIUM"} as const}
 */
export const UserRolesEnum = {
  ADMIN: "admin",
  USER: "user",
  MODERATOR: "moderator",
  GUEST: "guest",
  PREMIUM: "premium",
}; 

export const AvailableUserRoles = Object.values(UserRolesEnum);

/**
 * @type {{ TECHNOLOGY: "TECHNOLOGY"; HEALTH: "HEALTH"; EDUCATION: "EDUCATION"; ENTERTAINMENT: "ENTERTAINMENT"; SPORTS: "SPORTS"} as const}
 */

export const AvailableBlogCategoryEnum = {
  TECHNOLOGY: "technology",
  HEALTH: "health",
  EDUCATION: "education",
  ENTERTAINMENT: "entertainment",
  SPORTS: "sports",
};

export const AvailableBlogCategory = Object.values(AvailableBlogCategoryEnum);
