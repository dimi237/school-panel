<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Carbon;

class CustomerResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'id'         => $this->id,
            'name'       => $this->name,
            'birthdate'      => $this->birthdate,
            'birthplace'    => $this->birthplace,
            'certificate'    => $this->certificate,
            'certifdate'    => $this->certifdate,
            'speciality'    => $this->speciality,
            'certificate_id'    => $this->certificate_id,
            'badge_id'    => $this->badge_id,
            'role'    => $this->role,
            'created_at' => Carbon::parse($this->created_at)->toDateString(),
            'updated_at' => Carbon::parse($this->updated_at)->toDateString(),
        ];
    }
}
