class Api::BenchesController < ApplicationController
  def index
    @benches = Bench.in_bounds(params[:bounds])
    render :index
  end

  def create
    @bench = Bench.new(bench_params)
    if @bench.save
      render json: @bench.to_json
    else
      render json: @pokemon.errors.full_messages, status: 422
    end
  end
  
  private
  def bench_params
    params.require(:bench).permit(:description, :lat, :lng)
  end
end
