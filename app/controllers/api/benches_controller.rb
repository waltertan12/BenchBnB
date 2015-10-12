class Api::BenchesController < ApplicationController
  def index
    @benches = Bench.in_bounds(params[:filter])
    render :index
  end

  def create
    @bench = Bench.new(bench_params)
    if @bench.save
      render json: @bench.to_json
    else
      render json: @bench.errors.full_messages, status: 422
    end
  end

  def update
    @bench = Bench.find(params[:id])
    if @bench.update(bench_params)
      render :index
    else
      render json: @bench.errors.full_messages, status: 422
    end
  end
  
  private
  def bench_params
    params.require(:bench).permit(
      :description, 
      :lat, 
      :lng, 
      :seating, 
      :image_url
    )
  end
end
