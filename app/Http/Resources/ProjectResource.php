<?php

namespace App\Http\Resources;

use App\Models\Screenshot;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class ProjectResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        $result = parent::toArray($request);
        $result['created_at']   = $this->created_at->diffForHumans();
        $result['screenshots']  = Screenshot::where('project_id', $this->id)->get()->pluck('image');
        $result['index_number'] = User::where('id', $this->user_id)->first()->index_number;
        return $result;
    }
}
