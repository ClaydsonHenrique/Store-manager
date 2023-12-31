const { getSalesServices, getSalesIdServices,
  addSale, deleteServiceId } = require('../services/sales.service');

const getSales = async (req, res) => {
  const resp = await getSalesServices();
  return res.status(200).json(resp);
};

const getSaleId = async (req, res) => {
  const { id } = req.params;
  const resp = await getSalesIdServices(id);
  if (resp && resp.length > 0) {
    return res.status(200).json(resp);
  }
  return res.status(404).json({ message: 'Sale not found' });
};

const salePost = async (req, res) => {
  const resp = await addSale(req.body);
  if (resp) {
    return res.status(201).json(resp);
  }
  return res.status(404).json({ message: 'Product not found' });
};

const deleteSale = async (req, res) => {
  const { id } = req.params;
  const sale = await deleteServiceId(id);

  if (!sale) {
    return res.status(404).json({ message: 'Sale not found' });
  }
  res.status(204).end();
};

module.exports = {
  getSales,
  getSaleId,
  salePost,
  deleteSale,
};