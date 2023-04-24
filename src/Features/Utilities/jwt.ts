import jsonwebtoken from "jsonwebtoken";
export const jwtGenerator = (props: any): string => {
  const jwtToken = jsonwebtoken.sign(props, process.env.JWT_SECRET_KEY ?? "", {
    algorithm: "HS256",
    expiresIn: 60 * 60 * 60,
  });
  return jwtToken;
};

export const jwtDecorator = async (token: string): Promise<any> => {
  try {
    const data = await jsonwebtoken.verify(
      token,
      process.env.JWT_SECRET_KEY ?? "",
      {
        complete: true,
      }
    );
    return data;
  } catch (error) {
    throw error;
  }
};
