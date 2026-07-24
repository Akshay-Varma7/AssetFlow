#models is in prisma folder

#src=
-config/prisma for exporting single client connection

-helper - ApiError in mw/c ,asyncHandler , db.ts main connection fn

-server.js main
-router for grouping
-middleware -auth,error
-controller for func
-services obj with func for a set of controllers(deal db logic)


-types

//commit msg: be/ or fe/
//we cant put runtime (every value) for type checks as its compile time
//ts const is abt forcing values to be stored literally if in obj//const in js is abt memeory not changing e obj but its val can

//spread vs rest-pattern for list of strings

//factory pattern

//role: here not Roles[] as its not many but union ,enum role yes but only 1,we need unioin

