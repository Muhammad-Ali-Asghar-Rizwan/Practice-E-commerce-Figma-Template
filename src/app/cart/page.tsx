export default function CartPage() {
  return (
    <div className="p-8">
      {/* Breadcrumb */}
      <div className="text-sm text-gray-500 mb-6">
        Home / <span className="text-gray-700 font-medium">Cart</span>
      </div>

      {/* Cart Table */}
      <div className="overflow-x-auto">
        <table className="w-full border border-gray-200 text-left">
          <thead>
            <tr className="bg-gray-100">
              <th className="p-4">Product</th>
              <th className="p-4">Price</th>
              <th className="p-4">Quantity</th>
              <th className="p-4">Subtotal</th>
            </tr>
          </thead>
          <tbody>
            {/* Row 1 */}
            <tr className="border-b">
              <td className="p-4 flex items-center space-x-4">
                <img
                  src="/images/tv.png" // Replace with actual image URL
                  alt="LCD Monitor"
                  className="w-12 h-12"
                />
                <span>LCD Monitor</span>
              </td>
              <td className="p-4">$650</td>
              <td className="p-4">
                <select
                  className="border border-gray-300 rounded px-2 py-1"
                  defaultValue="1"
                >
                  <option value="1">01</option>
                  <option value="2">02</option>
                  <option value="3">03</option>
                </select>
              </td>
              <td className="p-4">$650</td>
            </tr>
            {/* Row 2 */}
            <tr>
              <td className="p-4 flex items-center space-x-4">
                <img
                  src="/images/game.png" // Replace with actual image URL
                  alt="HI Gamepad"
                  className="w-12 h-12"
                />
                <span>HI Gamepad</span>
              </td>
              <td className="p-4">$550</td>
              <td className="p-4">
                <select
                  className="border border-gray-300 rounded px-2 py-1"
                  defaultValue="2"
                >
                  <option value="1">01</option>
                  <option value="2">02</option>
                  <option value="3">03</option>
                </select>
              </td>
              <td className="p-4">$1100</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Buttons */}
      <div className="flex justify-between items-center mt-6">
        <button className="px-4 py-2 bg-gray-200 rounded text-gray-600">
          Return To Shop
        </button>
        <button className="px-4 py-2 bg-blue-600 text-white rounded">
          Update Cart
        </button>
      </div>

      {/* Coupon Code and Summary */}
      <div className="mt-10 flex flex-wrap lg:flex-nowrap gap-8">
        {/* Coupon Section */}
        <div className="flex-grow">
          <label className="block mb-2 text-sm font-medium text-gray-600">
            Coupon Code
          </label>
          <div className="flex space-x-4">
            <input
              type="text"
              className="border border-gray-300 rounded px-4 py-2 w-full"
              placeholder="Enter coupon code"
            />
            <button className="px-4 py-2 bg-red-500 text-white rounded">
              Apply Coupon
            </button>
          </div>
        </div>

        {/* Cart Summary */}
        <div className="border border-gray-200 rounded-lg p-6 w-full lg:w-1/3">
          <h2 className="text-lg font-semibold mb-4">Cart Total</h2>
          <div className="space-y-2">
            <div className="flex justify-between">
              <span>Subtotal:</span>
              <span>$1750</span>
            </div>
            <div className="flex justify-between">
              <span>Shipping:</span>
              <span>Free</span>
            </div>
            <div className="flex justify-between font-bold text-lg">
              <span>Total:</span>
              <span>$1750</span>
            </div>
          </div>
          <button className="w-full mt-4 px-4 py-2 bg-red-500 text-white rounded">
            Proceed to checkout
          </button>
        </div>
      </div>
    </div>
  );
}
