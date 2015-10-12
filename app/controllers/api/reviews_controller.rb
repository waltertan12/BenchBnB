class Api::ReviewsController < ApplicationController
  def create
    @review = Review.new(review_params)
    if @review.save
      render json: @review.to_json
    else
      render json: @review.errors.full_messages, status: 422
    end
  end
  
  private
  def review_params
    params.require(:review).permit(:body, :bench_id, :rating)
  end
end
