export default (req, res) => {
  // const email = req.body.email
  console.log(`>>> Hello`, JSON.stringify(req.body));
  res.status(200).json({ text: "Hello" });
};
