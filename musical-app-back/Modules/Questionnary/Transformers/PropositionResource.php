<?php

namespace Modules\Questionnary\Transformers;

use Illuminate\Http\Resources\Json\Resource;

class PropositionResource extends Resource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request
     * @return array
     */
    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'text' => $this->text
        ];
    }
}
