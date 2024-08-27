import React from 'react';

const ShopLoading = () => {
  return (
    <div className="container mx-auto px-4 text-center">
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 px-11 lg:px-11 md:px-0">
        {[...Array(8)].map((_, index) => (
          <div key={index} className="bg-gray-200 shadow-custom relative overflow-hidden mt-6"> {/* Added margin top here */}
            <div className="animate-pulse">
              <div className="h-60 bg-gray-300 mb-4"></div> {/* Adjusted height here */}
              <div className="px-3 mb-5 flex flex-col gap-2">
                <div className="w-full flex flex-col items-start">
                  <div className="h-6 bg-gray-300 w-3/4 mb-2"></div>
                  <div className="h-4 bg-gray-300 w-full"></div>
                </div>
                <div className="flex items-center space-x-2 justify-between">
                  <div className="h-5 bg-gray-300 w-1/4"></div>
                  <div className="h-4 bg-gray-300 w-1/5"></div>
                </div>
              </div>
            </div>
            <div className="absolute inset-0 bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 shimmer"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShopLoading;
